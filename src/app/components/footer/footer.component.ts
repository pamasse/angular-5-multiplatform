import { Component, OnInit } from '@angular/core';
import {DnsCheckService} from '../../services/dns-check.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private version;

  constructor(private dnsCheckService: DnsCheckService) {}

  ngOnInit() {
    this.getAppVersion();
  }

  getAppVersion(): void {
    const self = this;
    this.dnsCheckService.versionInfo().then( res => {
      self.version = `Zonemaster Test Engine Version: ${res['zonemaster_engine']}`;
    }, err => { self.version = err; });
  }

}
