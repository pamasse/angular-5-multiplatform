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
        if (result['status'] === 'ok') {
          this.dnsCheckService.startDomainTest(data).then(id => {
            domainCheckId = id as string;

            const handle = setInterval(() => {
              self.dnsCheckService.testProgress(domainCheckId).then(res => {
                ( chrome || browser ).runtime.sendMessage({
                  action: 'progress',
                  progression: res,
                  source: 'background',
                  destination: ( tabId ? 'page-action' : 'browser-action'),
                  tabId: tabId
                });

                if (res === 100) {
                  clearInterval(handle);
                  if (openTab) {
                    browser.tabs.create({
                      url: `https://zonemaster.afnic-labs.fr/result/${res.domainCheckId}`
                    });
                  } else {
                    self.dnsCheckService.getTestResults({id: domainCheckId, language: 'en'}).then(domainCheckResult => {
                      const level = {};
                      for (const item of domainCheckResult) {
                        level[item.level]++;
                      }
                      self.urlCache[data.domain] = level;
                      self.tabCache[tabId] = {url: data.domaine, result: level};
                      ( chrome || browser ).runtime.sendMessage({
                        action: 'complete',
                        result: {domainCheckId: res.domainCheckId, result: level},
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
      delete this.urlCache[this.tabCache[tabId].url];
      this.tabCache[tabId] = null;
    });

    (chrome || browser).tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        if (changeInfo.url) {
          const url = changeInfo.url.split('/')[2];
          if (this.urlCache[url] === undefined) {
            this.tabCache[changeInfo.tabId].result = this.urlCache[url];
            this.tabCache[changeInfo.tabId].url = url;
          } else {
            this.analyze({}, false, tabId);
          }
        }
      }
    });


    (chrome || browser).tabs.onActivated.addListener(activeInfo => {
      if (this.tabCache[activeInfo.tabId] !== undefined) {
        let level = 'NOTICE';
        const result = this.tabCache[activeInfo.tabId].result;
        Object.keys(result).forEach(function (key) {
          if (result[level] > result[key]) {
            level = key;
          }
        });
        (chrome || browser).pageAction.setIcon({
            path: `/assets/favicon/favicon-${level}-16x16.png`,
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
