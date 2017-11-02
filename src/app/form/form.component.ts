import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormGroup,
  FormControl,
  FormArray,
  Validators } from '@angular/forms';
import {DnsCheckService} from '../dns-check.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() domainCheck;
  @Input() domain_check_progression;

  private intervalTime = 5 * 1000;
  private checkboxForm: FormGroup;
  private is_advanced_options_enabled = false;
  private form = {ipv4: true, ipv6: true, profile: 'default_profile', domain: ''};
  private items = [
    {key: 'ipv4', value: 'IPv4', checked: 'true'},
    {key: 'ipv6', value: 'IPv6', checked: 'true'},
  ];

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

}
