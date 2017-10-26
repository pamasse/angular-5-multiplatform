import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  private versionUrl = 'http://localhost/version';

  constructor(private http: HttpClient) { }

  // Depreciated
  // TODO To Delete
  public getAppVersion(): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.http.get(this.versionUrl)
        .subscribe(res => {
          resolve(res['result']);
        }, (err) => {
          console.error(err);
          reject('N/A');
        });
    });
  }
}
