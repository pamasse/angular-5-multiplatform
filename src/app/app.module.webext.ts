import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component.webext';

import { AppService } from '@modules/core/services/app.service';
import { DnsCheckService } from '@modules/core/services/dns-check.service';
import { AlertService } from '@modules/core/services/alert.service';
import { CoreModule } from '@modules/core';
import { SharedModule } from '@modules/shared';
import { WebExtModule } from '@modules/webext';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const appRoutes: Routes = [
  { path: '**', redirectTo: 'formContainer'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
    WebExtModule
  ],
  providers: [
    AppService,
    DnsCheckService,
    AlertService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

