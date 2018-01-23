/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlertService } from './services/alert.service';
import { AppService } from './services/app.service';
import { DnsCheckService } from './services/dns-check.service';

@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    /* our own custom services  */
    AlertService,
    AppService,
    DnsCheckService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
