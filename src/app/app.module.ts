import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { StaticModule } from '@app/static';
import { DomainsModule } from '@app/domains';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'domainCheck',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'pageNotFound' }
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
    StaticModule,
    DomainsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

