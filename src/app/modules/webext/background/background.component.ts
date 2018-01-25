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

  constructor(private dnsCheckService: DnsCheckService) {
    console.log('background.js');

  }

  ngOnInit() {
    console.log('in onInit');

    (chrome || browser).tabs.onRemoved.addListener(tabId => {
      this.tabCache[tabId] = null;
    });

    (chrome || browser).tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        if (changeInfo.url) {
          const url = changeInfo.url.split('')[2];
          if (url in this.urlCache) {

          }
        }
      }

    });

    (chrome || browser).runtime.onMessage.addListener((message, sender, sendResponse) => {
      if ( typeof message.id !== 'undefined' ) {
        if ( message.id !== 'log' ) {
          // Log
        }

        let response;

        switch ( message.id ) {
          case 'log':
            console.log(message.message, message.source);
            break;
          case 'analyze':
            console.log('Analyze');
            console.log(sender.tab.url);
            /*
            if ( this.headersCache[url.canonical] !== undefined ) {
              message.subject.headers = this.headersCache[url.canonical];
            }
            */
            /*
            wappalyzer.analyze(url, message.subject, {
              tab: sender.tab
            });
            */
            break;
          case 'get_info':
            console.log('get_info');
            console.log(message.tab.id);
            response = {
              tabCache:   this.tabCache[message.tab.id],
              // apps:       wappalyzer.apps,
              // categories: wappalyzer.categories
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
