import {Component} from '@angular/core';
import {DnsCheckService} from '@modules/core/services/dns-check.service';
import {AlertService} from '@modules/core/services/alert.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {
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

  public fetchFromParent(domain) {
    this.dnsCheckService.fetchFromParent(domain).then(result => {
      this.parentData = result;
      this.alertService.success('Parent data fetched with success');
    }, error => {
      console.log(error);
      this.alertService.error('Error during fetchFromParent');
    });
  }

  public domainCheck(data: object) {
    let domainCheckId: string;

    const self = this;

    this.dnsCheckService.validateSyntax(data).then(
      result => {
        if (result['status'] === 'ok') {
          this.dnsCheckService.startDomainTest(data).then(id => {
            domainCheckId = id as string;
            this.showProgressBar = true;
            const handle = setInterval(() => {
              self.dnsCheckService.testProgress(domainCheckId).then(res => {

                self.domain_check_progression = res as number;

                if (res === 100) {
                  clearInterval(handle);
                  this.alertService.success(`Domain ${data['domain']} checked with success`);
                  self.resultID = domainCheckId;
                  self.is_advanced_options_enabled = false;
                  /* Web Extension API in order to create a new tab */
                  browser.tabs.create({
                    url: `https://zonemaster.afnic-labs.fr/result/${domainCheckId}`
                  });
                  self.showProgressBar = false;
                  self.domain_check_progression = 0;
                }
              });
            }, this.intervalTime);
          });
        }
      }, error => {
        this.alertService.error(`Server error`);
      }
    );
  }
}
