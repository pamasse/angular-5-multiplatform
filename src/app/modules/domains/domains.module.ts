import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@modules/shared';

import {DomainsRoutingModule} from './domains-routing.module';

import { ResultComponent } from './result/result.component';
import { DomainComponent } from './domain/domain.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    DomainsRoutingModule,
  ],
  declarations: [
    ResultComponent,
    DomainComponent,
    HistoryComponent,
  ],
  exports: [
    ResultComponent,
    DomainComponent,
    HistoryComponent,
  ]
})
export class DomainsModule { }
