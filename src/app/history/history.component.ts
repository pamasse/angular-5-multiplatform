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

  constructor(private dnsCheckService: DnsCheckService) { }

  ngOnInit() {
    // TODO Cache le resultat de la query si elle a deja été faite
    this.dnsCheckService.getTestHistory(this.query).then(data => {
      this.history = data as any[];

      if (this.history.length === 0) {
        console.log('No result for this query');
        // Message error;
      }

      this.setItemsByPage(1);
    });
  }

  public setItemsByPage(page: number) {
    // TODO rename function
    this.historyItems = this.history.slice( (page - 1) * this.pagesize, page * this.pagesize );
  }

}
