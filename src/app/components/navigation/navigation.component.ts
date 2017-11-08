import { Component, OnInit, NgZone} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public logoUrl: string;
  public isNavbarCollapsed: boolean;
  public isShrunk = false;

  constructor(private translateService: TranslateService, zone: NgZone) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang());
    this.logoUrl = AppService.getLogoUrl();
    window.onscroll = () => {
      zone.run(() => {
        if (window.pageYOffset > 0) {
          this.isShrunk = true;
        } else {
          this.isShrunk = false;
        }
      });
    };
  }

  ngOnInit() {
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
