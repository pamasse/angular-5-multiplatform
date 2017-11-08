import { Component, OnInit } from '@angular/core';
import {DnsCheckService} from '../../services/dns-check.service';
import {AppService} from '../../services/app.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public version;
  public contactAddress: string;

  constructor(private dnsCheckService: DnsCheckService, private alertService: AlertService) {
    this.contactAddress = AppService.getContactAddress();
  }

  ngOnInit() {
    this.getAppVersion();
  }

  getAppVersion(): void {
    const self = this;
    this.dnsCheckService.versionInfo().then( res => {
      self.version = `Zonemaster Versions`;
     // ${res['zonemaster_engine']}
    }, err => {
      this.alertService.error('Zonemaster Backend is not available');
      console.error(err);
    });
  }

}
