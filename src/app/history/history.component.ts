import { Component, OnInit, Input } from '@angular/core';
import {DnsCheckService} from '../dns-check.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() query: object;

  public page = 1;
  public pagesize = 10;
  public pagedItems: any[];

  public history: any[] = [];
  public historyItems: any[] = [];

  public fakedata = {"result":[{"overall_result":"ok","id":"ccc870f6f27da9c8","creation_time":"2017-11-02 08:59:18.129465","advanced_options":null},{"overall_result":"ok","id":"76db32a05013b6aa","creation_time":"2017-10-26 06:49:16.966505","advanced_options":null},{"overall_result":"ok","id":"c9844d9c37ccbdd9","advanced_options":null,"creation_time":"2017-06-02 08:27:15.667014"},{"advanced_options":null,"creation_time":"2017-04-07 12:46:25.198288","id":"71835d70ea0d6c24","overall_result":"warning"},{"id":"da956ab57e1f7a5a","creation_time":"2017-04-07 12:44:39.474981","advanced_options":null,"overall_result":"warning"},{"id":"e922327ad4deb6f0","advanced_options":null,"creation_time":"2017-04-07 12:43:51.551498","overall_result":"warning"},{"id":"d8fc979a4ab9dec3","advanced_options":null,"creation_time":"2017-04-07 12:43:23.057584","overall_result":"ok"},{"id":"38873a681955cf67","creation_time":"2017-04-07 11:58:08.538507","advanced_options":null,"overall_result":"ok"},{"advanced_options":null,"creation_time":"2017-04-07 10:22:34.758453","id":"cecf2eaa1934e084","overall_result":"ok"},{"overall_result":"ok","advanced_options":null,"creation_time":"2017-04-07 10:11:03.052287","id":"cb7169d3dd8437b8"},{"id":"c5f9df61b516c3b8","creation_time":"2015-12-25 15:44:43.132439","advanced_options":null,"overall_result":"ok"},{"advanced_options":null,"creation_time":"2015-12-03 15:21:21.407","id":"020095b8d350ad8c","overall_result":"critical"},{"overall_result":"error","advanced_options":null,"creation_time":"2015-03-13 23:17:54.100453","id":5907},{"id":5905,"creation_time":"2015-03-13 22:44:34.445243","advanced_options":null,"overall_result":"error"},{"overall_result":"error","id":5901,"creation_time":"2015-03-13 22:23:04.328058","advanced_options":null},{"id":5900,"creation_time":"2015-03-13 22:09:01.125608","advanced_options":null,"overall_result":"error"},{"id":1784,"creation_time":"2015-02-02 13:56:17.216975","advanced_options":null,"overall_result":"ok"},{"advanced_options":null,"creation_time":"2015-02-02 13:23:03.074843","id":1783,"overall_result":"ok"},{"overall_result":"ok","creation_time":"2015-01-28 09:33:10.862845","advanced_options":null,"id":1698},{"overall_result":"ok","id":1673,"creation_time":"2015-01-27 10:31:46.356227","advanced_options":null}]};


  constructor(private dnsCheckService: DnsCheckService) { }

  ngOnInit() {
    // TODO Cache le resultat de la query si elle a deja été faite
    this.dnsCheckService.getTestHistory(this.query).then(data => {
      data = this.fakedata['result'];
      console.log(data);

      if (data['length'] === 0) {
        console.log('No result for this query');
        // Message error;
      }

      this.history = data as any;
      this.loadPage(1);
    });
  }

  public loadPage(page: number) {
    // TODO rename function
    this.historyItems = this.history.slice( (page - 1) * this.pagesize, page * this.pagesize );
  }

}
