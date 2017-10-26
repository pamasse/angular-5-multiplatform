import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DnsCheckService {
  private backendUrl = 'http://localhost:5000';
  private activeUrl = 'http://localhost/ang/domain_check';
  private inactiveUrl = 'http://localhost/ang/domain_check';

  constructor( private http: HttpClient) {}

  private RPCRequest(method, params = []) {
    const id = Date.now();
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
            reject(res['error']);
          } else {
            resolve(res['result']);
          }
        }, (err) => {
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
}
