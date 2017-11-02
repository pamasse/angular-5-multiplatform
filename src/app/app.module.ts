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
import { DomainComponent } from './domain/domain.component';
import { PreDelegatedDomainComponent } from './pre-delegated-domain/pre-delegated-domain.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppService } from './app.service';
import {DnsCheckService} from './dns-check.service';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { FilterByCategoriesPipe } from './filter-by-categories.pipe';
import { RomanizePipe } from './romanize.pipe';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: 'domainCheck', component: DomainComponent, data: [{preDelegated: false}] },
  { path: 'preDelegatedDomainCheck', component: DomainComponent, data: [{preDelegated: true}] },
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
    PreDelegatedDomainComponent,
    FaqComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    FilterPipe,
    FilterByCategoriesPipe,
    RomanizePipe
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
    DnsCheckService],
  bootstrap: [AppComponent]
})

export class AppModule {}

