import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.webext.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'app';
  private lang = 'en';

  constructor(translateService: TranslateService) {
    translateService.setDefaultLang(this.lang);
    this.lang = translateService.getBrowserLang();
    translateService.use(this.lang);
  }
}

