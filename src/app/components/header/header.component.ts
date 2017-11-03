import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public logoUrl: string;
  public isNavbarCollapsed: boolean;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang());
    this.logoUrl = AppService.getLogoUrl();
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
