import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { saveAs } from 'file-saver';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import {DnsCheckService} from '../dns-check.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() resultID: string;

  public result = [];
  public pagesize = 10;
  public pagedItems: any[];
  public modules: Object;
  public module_items: any = {};
  public modulesKeys;
  public searchQueryLength = 0;
  public resutlCollapsed = true;
  private closeResult: string;
  private intervalTime = 5 * 1000;
  public test: any = {params: {ipv4: false, ipv6: false}};
  public isCollapsed = [];
  public ns_list;
  public ds_list;
  public level_items: Object = {
    info: [],
    notice: [],
    warning: [],
    error: [],
    critical: [],
  };
  public result_filter: Object = {
    all: true,
    info: false,
    notice: false,
    warning: false,
    error: false,
    critical: false,
    search: ''
  };
  private form = {ipv4: true, ipv6: true, profile: 'default_profile', domain: ''};

  constructor(private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private translateService: TranslateService,
              private dnsCheckService: DnsCheckService) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.displayResult(this.resultID, event.lang);
    });
  }

  ngOnInit() {
    const language = this.translateService.currentLang;

    if (!this.resultID) {
      this.displayResult(this.resultID, language);
    } else {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.resultID = params['resultID'];
        this.displayResult(this.resultID, language);
      });
    }
  }

  // Modal
  public openModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  private displayResult(domainCheckId: string, language: string) {

    this.dnsCheckService.getTestResults({id: domainCheckId, language}).then(data => {

      // TODO clean

      this.test = {
        id: data['id'],
        creation_time: data['creation_time'],
        location: `/result/${domainCheckId}`,
        params: data['params']
      };

      this.result = data['results'];

      this.setItemsColors(this.result);
      this.setModulesColors(data['results']);

      this.modulesKeys = Object.keys(this.modules);
      for (let i = 0; i < this.modulesKeys.length; i++) {
        this.isCollapsed[i] = true;
        this.module_items[this.modulesKeys[i]] = [];
      }

      for (const item of data['results']) {
        this.module_items[item.module].push(item);
      }

      for (const item of data['results']) {
        this.level_items[item['level'].toLowerCase()].push(item);
      }

      this.form = data['params'];
      this.ns_list = data['ns_list'];
      this.ds_list = data['ds_list'];
    });
  }

  public exportFile() {
    const blob = new Blob([JSON.stringify(this.result)], {
      type: 'text/html;charset=utf-8'
    });

    saveAs(blob, `zonemaster_result_${this.test['location']}.txt`);
  }

  private setItemsColors(data): void {
    for (const item in data) {
      if (['WARNING'].includes(this.result[item].level)) {
        this.result[item].color = this.result[item].level.toLowerCase();
      } else if (['ERROR', 'CRITICAL'].includes(this.result[item].level)) {
        this.result[item].color = 'danger';
      } else if (['NOTICE'].includes(this.result[item].level)) {
        this.result[item].color = 'success';
      } else {
        this.result[item].color = '';
      }
    }
  }
  public setModulesColors(result): void {
    const modules = {};
    for (const item of result) {
      if (typeof modules[item.module] === 'undefined') {
        modules[item.module] = '';
      }
      if (item.level === 'WARNING') {
        modules[item.module] = 'warning';
      }
      if (item.level === 'ERROR') {
        modules[item.module] = 'danger';
      }
      if (item.level === 'CRITICAL') {
        modules[item.module] = 'danger';
      }
    }
    this.modules = modules;
  }

  public togglePillFilter(name) {
    this.result_filter[name] = !this.result_filter[name];
    const atLeastOneActive = Object.keys(this.result_filter).slice(1, -1).filter(el => this.result_filter[el]);
    this.searchQueryLength = atLeastOneActive.length;

    if (atLeastOneActive.length < 1) {
      this.result_filter['all'] = true;
    } else if (name === 'all') {
      for (const index of Object.keys(this.result_filter).slice(1, -1)) {
        this.result_filter[index] = false;
      }
      this.result_filter['all'] = true;
      this.searchQueryLength = -1;
    } else {
      this.result_filter['all'] = false;
    }
  }

}
