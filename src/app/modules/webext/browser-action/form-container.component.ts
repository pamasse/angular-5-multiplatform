import {Component, OnInit} from '@angular/core';
import {DnsCheckService} from '@modules/core/services/dns-check.service';
import {AlertService} from '@modules/core/services/alert.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  private intervalTime = 5 * 1000;
  public is_advanced_options_enabled = false;
  public domain_check_progression = 0;
  public showResult = false;
  public showProgressBar = false;
  public preDelegated = false;
  public parentData: object;
  public resultID = '';
  public lang = 'en';

  constructor(private alertService: AlertService, private dnsCheckService: DnsCheckService) {}

  private backendEmit(action, tabs) {
    ( chrome || browser ).runtime.sendMessage({
      action,
      tab: tabs[0],
      source: 'browser-action',
      destination: 'background'
    }, response => {
      this.showProgressBar = true;
      if (response.status) {
        this.showProgressBar = false;
        this.onComplete(response.result);
      }
    });
  }

  ngOnInit() {
    browser.tabs.query({ active: true, currentWindow: true })
      .then(tabs => {
        this.backendEmit('get_info', tabs);
      })
      .catch(console.error);

    (chrome || browser).runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.destination === 'browser-action') {
        switch (message.action) {
          case 'progress':
            this.onProgress(message.progression);
            break;
          case 'complete':
            this.onComplete(message.result);
            break;
          case 'error':
            this.onError(message.error);
            break;
          default:
            console.log('BrowserAction  Default ');
        }
      }
    });
  }

  public domainCheck(data: object) {
    browser.tabs.query({ active: true, currentWindow: true })
      .then(tabs => {
        tabs.analyzeData = data;
        this.backendEmit('analyze', tabs);
      })
      .catch(console.error);
  }

  private onComplete(res) {
    console.log('on complete');
  }

  private onError(err) {
    console.log(err);
  }

  private onProgress(progression) {
    console.log(progression);
    this.domain_check_progression = progression;
  }
}
