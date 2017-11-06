import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AlertService} from './alert.service';
import {AppService} from './app.service';

@Injectable()
export class DnsCheckService {
  private backendUrl: string;
  private clientInfo: object;

  constructor(private alertService: AlertService, private http: HttpClient) {
    this.backendUrl = AppService.apiEndpoint();
    this.clientInfo = AppService.getClientInfo();

    if (this.backendUrl) {
      console.error('Please set the api endpoint');
    }
  }

  private RPCRequest(method, params = {}) {
    const id = Date.now();
    params['client_version'] = this.clientInfo['version'];
    params['client_id'] = this.clientInfo['id'];
    const data = {
      'jsonrpc': '2.0',
      id,
      method,
      params
    };

    return new Promise((resolve, reject) => {
      this.http.post(this.backendUrl, data)
        .subscribe(res => {
          if ('error' in res) {
            console.log(res['error']);
            this.alertService.error('Error');
            reject(res['error']);
          } else {
            resolve(res['result']);
          }
        }, (err) => {
          this.alertService.error('Error');
          console.error(err);
          reject(err);
        });
    });
  }

  // TODO to valid with michal
  private getUserIp() {
    this.http.get('http://api.ipify.org')
      .subscribe(response => console.log(response));
  }

  // API Implementation from https://github.com/dotse/zonemaster-backend/blob/master/docs/API.md
  public versionInfo() {
    return this.RPCRequest('version_info');
  }

  public getNSIps(domain) {
    return this.RPCRequest('get_ns_ips', domain);
  }

  public getDataFromParentZone(domain) {
    return this.RPCRequest('get_data_from_parent_zone', domain);
  }

  public startDomainTest(data) {
    return this.RPCRequest('start_domain_test', data);
  }

  public testProgress(testId) {
    return this.RPCRequest('test_progress', testId);
  }

  public getTestResults(data) {
    return this.RPCRequest('get_test_results', data);
  }

  public getTestHistory(data) {
    return this.RPCRequest('get_test_history', data);
  }

  public validateSyntax(data) {
    return this.RPCRequest('validate_syntax', data);
  }

  public fetchFromParent(domain) {
    return this.RPCRequest('get_data_from_parent_zone', domain);
  }

}
