import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
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
