import {Component, OnInit} from '@angular/core';
import {DnsCheckService} from '../dns-check.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private intervalTime = 5 * 1000;
  private is_advanced_options_enabled = false;
  public domain_check_progression = 0;
  public showResult = false;
  public showProgressBar = false;
  public preDelegated;
  public parentData: object;
  public resultID = '';

  constructor(private dnsCheckService: DnsCheckService, route: ActivatedRoute) {
    this.preDelegated = route.snapshot.data[0]['preDelegated'];
    this.is_advanced_options_enabled = this.preDelegated;
  }

  ngOnInit() {}

  public fetchFromParent(domain) {
    console.log(domain);
    this.dnsCheckService.fetchFromParent(domain).then(result => {
      console.log(result);
      this.parentData = result;
  }, error => {
    console.error('Error');
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
                  if (!this.showResult) {
                    self.resultID = domainCheckId;
                    self.showResult = true;
                    self.showProgressBar = false;
                    self.domain_check_progression = 0;
                  }
                }
              });
            }, this.intervalTime);
          });
        }
      }
    );
  }
}
