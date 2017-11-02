import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators } from '@angular/forms';
import {DnsCheckService} from '../dns-check.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private closeResult: string;
  private intervalTime = 5 * 1000;
  private checkboxForm: FormGroup;
  private is_advanced_options_enabled = false;
  private form = {ipv4: true, ipv6: true, profile: 'default_profile', domain: ''};
  private items = [
    {key: 'ipv4', value: 'IPv4', checked: 'true'},
    {key: 'ipv6', value: 'IPv6', checked: 'true'},
  ];
  private NSFormConfig = {
    ns: [''],
    ip: ['']
  };
  private digestFormConfig = {
    keytag: [''],
    algorithm: [''],
    digtype: [''],
    digest: ['']
  };
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
  public NSForm: FormGroup;
  public digestForm: FormGroup;
  public domain_check_progression = 0;
  public isCollapsed = [];
  public ns_list;
  public ds_list;
  public history: any = [];
  public historyItems: any = [];
  public test: any = {params: {ipv4: false, ipv6: false}};
  public modulesKeys;
  public module_items: any = {};
  public showResult = false;
  public showProgressBar = false;
  public preDelegated;
  public page = 1;
  public searchQueryLength = 0;
  public resutlCollapsed = true;
  public resultID = '';

  public result = [];
  public pagesize = 10;
  public pagedItems: any[];
  public modules: Object;

  constructor(private dnsCheckService: DnsCheckService, private translateService: TranslateService,
              private formBuilder: FormBuilder, route: ActivatedRoute, private modalService: NgbModal) {
    this.preDelegated = route.snapshot.data[0]['preDelegated'];
    this.is_advanced_options_enabled = this.preDelegated;
  }

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
      this.form[v.key] = v.checked;
      this.checkboxForm.controls.selectedItems.setValue(this.mapItems(v));
    });

    this.NSForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows(this.NSFormConfig)]) // here
    });

    this.digestForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows(this.digestFormConfig)]) // here
    });

  }

  addNewRow(form, value= null) {
    const control = <FormArray>this[form].controls['itemRows'];
    if (value !== null) {
      control.push(this.initItemRows(value));
    } else if (form === 'NSForm') {
      control.push(this.initItemRows(this.NSFormConfig));
    } else if (form === 'digestForm') {
      control.push(this.initItemRows(this.digestFormConfig));
    }
  }

  deleteRow(form, index: number) {
    const control = <FormArray>this[form].controls['itemRows'];
    control.removeAt(index);
  }

  initItemRows(value) {
    return this.formBuilder.group(value);
  }

  private mapItems(items) {
    const selectedItems = items.filter((l) => l.checked).map((l) => l.key);
    return selectedItems.length ? selectedItems : null;
  }

  public fetchFromParent() {
    this.dnsCheckService.fetchFromParent(this.form['domain']).then(result => {
      this.deleteRow('NSForm', 0);
      result['ns_list'].map(ns => {
        this.addNewRow('NSForm', ns);
      });

      this.deleteRow('digestForm', 0);
      result['ds_list'].map(digest => {
        this.addNewRow('digestForm', digest);
      });
    }, error => {
        console.error('Error');
    });
  }

  public domainCheck() {
    let domainCheckId: string;

    const self = this;
    if (this.form['domain'] === '') {
      console.log('nope, need domain');
      return false;
    }

    if (this.preDelegated) {
      this.form['nameservers'] = this.NSForm.value.itemRows;
      this.form['ds_info'] = this.digestForm.value.itemRows;
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
                    self.resultID = domainCheckId;
                    self.showResult = true;
                    self.showProgressBar = false;
                  }
                }
              });
            }, this.intervalTime);
          });

          this.dnsCheckService.getTestHistory(this.form).then(data => {
            this.history = data as any;
            // this.historyItems = this.loadPage(1);
          });
        }
      }
    );
  }

  public loadPage(page: number) {
    // TODO rename function
    this.historyItems = this.history.slice( (page - 1) * this.pagesize, page * this.pagesize );
  }


}
