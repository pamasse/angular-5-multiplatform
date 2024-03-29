import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { DomainComponent } from './components/domain/domain.component';
import { FaqComponent } from './components/faq/faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { HistoryComponent } from './components/history/history.component';
import { AlertComponent } from './components/alert/alert.component';

import { FilterPipe } from './pipes/filter.pipe';
import { FilterByCategoriesPipe } from './pipes/filter-by-categories.pipe';
import { RomanizePipe } from './pipes/romanize.pipe';

import { AppService } from './services/app.service';
import {DnsCheckService} from './services/dns-check.service';
import {AlertService} from './services/alert.service';
import { HeaderComponent } from './components/header/header.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const appRoutes: Routes = [
  { path: 'domainCheck', component: DomainComponent, data: [{preDelegated: false}] },
  { path: 'preDelegatedDomainCheck', component: DomainComponent, data: [{preDelegated: true}] },
  { path: 'result/:resultID', component: ResultComponent, data: [{directAccess: true}]},
  { path: 'history', component: HistoryComponent},
  { path: 'faq', component: FaqComponent },
  { path: '',
    redirectTo: 'domainCheck',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DomainComponent,
    FaqComponent,
    PageNotFoundComponent,
    NavigationComponent,
    FooterComponent,
    FormComponent,
    FilterPipe,
    FilterByCategoriesPipe,
    RomanizePipe,
    ResultComponent,
    HistoryComponent,
    AlertComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AppService,
    DnsCheckService,
    AlertService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

