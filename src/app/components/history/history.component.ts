import { Component, OnInit, Input } from '@angular/core';
import {DnsCheckService} from '../../services/dns-check.service';
import {AlertService} from '../../services/alert.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() query: object;

  public page = 1;
  public pageSize = 10;

  public history: any[] = [];
  public historyItems: any[] = [];

  constructor(private alertService: AlertService, private dnsCheckService: DnsCheckService) { }

  ngOnInit() {
    // TODO Cache le resultat de la query si elle a deja été faite
    this.dnsCheckService.getTestHistory(this.query).then(data => {
      this.history = data as any[];

      if (this.history.length === 0) {
        this.alertService.info('No result for this query');
      }

      this.setItemsByPage(1);
    });
  }

  public setItemsByPage(page: number) {
    // TODO rename function
    this.historyItems = this.history.slice( (page - 1) * this.pageSize, page * this.pageSize );
  }

}
