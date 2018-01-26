import { Component, OnInit } from '@angular/core';
import {DnsCheckService} from '@modules/core/services/dns-check.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  private tabCache = {};
  private urlCache = {};
  private intervalTime = 10 * 1000;

  constructor(private dnsCheckService: DnsCheckService) {
    console.log('background.js');
  }

  analyze(data, openTab, tabId) {
    let domainCheckId: string;

    const self = this;
    console.log(data);
    if (!data.domain) {
      console.log('Please fil a domaine');
      return;
    }
    if (data.ipv4) {
      data.ipv4 = true;
    }
    if (data.ipv6 === 'undefined') {
      data.ipv6 = true;
    }
    data.profile = 'default_profile';

    this.dnsCheckService.validateSyntax(data).then(result => {
        console.log('ValidateSyntaxe: ' + result['status']);
        if (result['status'] === 'ok') {
          this.dnsCheckService.startDomainTest(data).then(id => {
            domainCheckId = id as string;
            self.tabCache[tabId] = {
              url: data.domaine,
              state: 'progress',
              domainCheckId
            };

            const handle = setInterval(() => {
              self.dnsCheckService.testProgress(domainCheckId).then(progression => {
                ( chrome || browser ).runtime.sendMessage({
                  action: 'progress',
                  progression: progression,
                  source: 'background',
                  destination: ( tabId ? 'page-action' : 'browser-action'),
                  tabId: tabId
                });
                console.log('Check progress :' + progression);
                if (progression === 100) {
                  clearInterval(handle);
                  if (openTab) {
                    browser.tabs.create({
                      url: `https://zonemaster.afnic-labs.fr/result/${domainCheckId}`
                    });
                  } else {
                    self.dnsCheckService.getTestResults({id: domainCheckId, language: 'en'}).then(domainCheckResult => {
                      console.log('Check result: ' + domainCheckId);
                      const levels = {};
                      for (const item of domainCheckResult['results']) {
                        levels[item.level]++;
                      }
                      self.urlCache[data.domain] =  {levels, domainCheckId};
                      self.tabCache[tabId] = {
                        url: data.domaine,
                        result: levels,
                        state: 'complete',
                        domainCheckId
                      };
                      ( chrome || browser ).runtime.sendMessage({
                        action: 'complete',
                        result: self.tabCache[tabId],
                        source: 'background',
                        destination: 'browser-action'
                      });
                    });
                  }
                }
              });
            }, this.intervalTime);
          });
        }
      }, error => {
        console.error(`Server error`);
      }
    );
  }

  ngOnInit() {
    console.log('in onInit');

    (chrome || browser).tabs.onRemoved.addListener(tabId => {
      console.log('onRemoved :' + tabId);
      delete this.urlCache[this.tabCache[tabId].url];
      delete this.tabCache[tabId];
    });

    (chrome || browser).tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        if (tab.url) {
          const url = tab.url.split('/')[2];
          if (this.urlCache[url] !== undefined) {
            console.log('connu');
            this.tabCache[tab.id].result = this.urlCache[url].levels;
            this.tabCache[tab.id].url = url;
            this.tabCache[tab.id].state = 'complete';
            this.tabCache[tab.id].domainCheckId = this.urlCache[url].domainCheckId;
          } else {
            console.log('inconnu');
            this.analyze({domain: url}, false, tabId);
          }
        }
      }
    });


    (chrome || browser).tabs.onActivated.addListener(activeInfo => {
      console.log('New tab activated : ');
      console.log(activeInfo);
      let icon = 'favicon-16x16.png';
      if (this.tabCache[activeInfo.tabId] !== undefined) {
        if (this.tabCache[activeInfo.tabId].state === 'complete') {
          let level = 'NOTICE';
          const result = this.tabCache[activeInfo.tabId].result;
          Object.keys(result).forEach(function (key) {
            if (result[level] > result[key]) {
              level = key;
            }
          });
          icon = `favicon-${level}-16x16.png`;
        } else if (this.tabCache[activeInfo.tabId].state === 'progress') {
          icon = `favicon-spinner-16x16.png`;
        }
        (chrome || browser).pageAction.setIcon({
          path: `/assets/favicon/${icon}`,
          tabId: activeInfo.tabId
        });
      }
    });

    (chrome || browser).runtime.onMessage.addListener((message, sender, sendResponse) => {
      if ( typeof message.action !== 'undefined' ) {
        let response = {result: {}, tabId: {}, status: false};

        switch ( message.action ) {
          case 'log':
            console.log(message.message, message.source);
            break;
          case 'analyze':
            console.log('Analyze');
            const url = sender.tab.url.url.split('/')[2];
            response.tabId = message.tab.id;
            console.log(url);
            if ( this.urlCache[url] !== undefined ) {
              response.status = true;
              response.result = this.urlCache[url.canonical];
            } else {
              if (message.source === 'browser-action') {
                this.analyze({}, true, null);
              } else {
                this.analyze({}, false, message.tab.id);
              }
            }
            break;
          case 'get_info':
            console.log('get_info');
            response = {
              result: this.tabCache[message.tab.id],
              tabId: message.tab.id,
              status: true
            };
            break;
          default:
            console.log('default');
            break;
        }

        sendResponse(response);
      }
    });
  }
}
