import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang());
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
