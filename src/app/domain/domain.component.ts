import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormGroup,
  FormControl,
  FormArray,
  Validators } from '@angular/forms';
import {DnsCheckService} from '../dns-check.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private intervalTime = 5 * 1000;
  private checkboxForm: FormGroup;
  private is_advanced_options_enabled = false;
  private form = {ipv4: true, ipv6: true, profile: 'default_profile', domain: ''};
  private items = [
    {key: 'ipv4', value: 'IPv4', checked: 'true'},
    {key: 'ipv6', value: 'IPv6', checked: 'true'},
  ];
  public domain_check_progression = 0;
  public result = {};
  public isCollapsed = [];
  public ns_list;
  public ds_list;
  public history = {};
  public test = {};
  public modules;
  public showResult = false;
  public showProgressBar = false;
  public pagedItems: any[];
  constructor(private dnsCheckService: DnsCheckService, private translateService: TranslateService) {}

  ngOnInit() {
    const group = [];

    group.push(new FormGroup({
      key: new FormControl('ipv4'),
      value: new FormControl('IPv4'),
      checked: new FormControl(true)
    }));
    group.push(new FormGroup({
      key: new FormControl('ipv6'),
      value: new FormControl('IPv6'),
      checked: new FormControl(true)
    }));

    const formControlArray = new FormArray(group);

    this.checkboxForm = new FormGroup({
      items: formControlArray,
      selectedItems: new FormControl(this.mapItems(formControlArray.value), Validators.required)
    });

    formControlArray.valueChanges.subscribe((v) => {
      this.form[v.key] = v.checked
      this.checkboxForm.controls.selectedItems.setValue(this.mapItems(v));
    });
  }

  private mapItems(items) {
    const selectedItems = items.filter((l) => l.checked).map((l) => l.key);
    return selectedItems.length ? selectedItems : null;
  }

  public domainCheck() {
    let domainCheckId: string;

    const self = this;
    if (this.form['domain'] === '') {
      console.log('nope, need domain');
      return false;
    }

    this.dnsCheckService.validateSyntax(this.form).then(
      result => {
        if (result['status'] === 'ok') {
          this.dnsCheckService.startDomainTest(this.form).then(id => {
            domainCheckId = id as string;
            this.showProgressBar = true;
            const handle = setInterval(() => {
              self.dnsCheckService.testProgress(domainCheckId).then(res => {

                self.domain_check_progression = res as number;

                if (res === 100) {
                  clearInterval(handle);
                  if (!this.showResult) {
                    self.displayResult(domainCheckId);
                    self.showResult = true;
                    self.showProgressBar = false;
                  }
                }
              });
            }, this.intervalTime);
          });

          this.dnsCheckService.getTestHistory(this.form).then(data => {
            this.history = data;
          });
        }
      }
    );
  }

  private displayResult(domainCheckId: string) {
    const language = this.translateService.currentLang;

    this.dnsCheckService.getTestResults({id: domainCheckId, language}).then(data => {
      this.test = {
        id: data['id'],
        creation_time: data['creation_time'],
        location: `/tests/${domainCheckId}`
      };
      this.result = data['results'];
      for (let i = 0; i < this.getModules(data['results']).length; i++){
        this.isCollapsed[i] = true;
      }
      this.form = data['params'];
      this.ns_list = data['ns_list'];
      this.ds_list = data['ds_list'];
    });
  }

  public setPage(page: number) {
    // TODO Filter pageItems list to a smaller list based on the full list of items
  }

  public exportHTML(event) {}
  public exportFile(event) {}
  public getModules(result) {
    console.log(result);
    const modules = {};
    for (const item of result) {
      if (typeof modules[item.module] === 'undefined') {
        modules[item.module] = 'check';
      }
      if (item.level === 'WARNING') {
        modules[item.module] = 'warning';
      }
      if (item.level === 'ERROR') {
        modules[item.module] = 'ban';
      }
      if (item.level === 'CRITICAL') {
        modules[item.module] = 'ban';
      }
    }
    this.modules = modules;
    return Object.keys(modules);
  }
  public getItems(result, module) {
    const ret = [];
    console.log(result);
    for ( const item in result ) {
      if ( result[item].module === module ) {
        ret.push( result[item] );
      }
    }
    return ret;
  }

}
