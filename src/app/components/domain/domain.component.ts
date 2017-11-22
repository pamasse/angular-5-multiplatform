import {Component, OnInit} from '@angular/core';
import {DnsCheckService} from '../../services/dns-check.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private intervalTime = 5 * 1000;
  public is_advanced_options_enabled = false;
  public domain_check_progression = 0;
  public showResult = false;
  public showProgressBar = false;
  public preDelegated;
  public parentData: object;
  public resultID = '';

  constructor(private alertService: AlertService, private dnsCheckService: DnsCheckService, route: ActivatedRoute) {
    this.preDelegated = route.snapshot.data[0]['preDelegated'];
    this.is_advanced_options_enabled = this.preDelegated;
  }

  ngOnInit() {}

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
                  self.showResult = true;
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
