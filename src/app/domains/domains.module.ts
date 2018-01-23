import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';

import {DomainsRoutingModule} from './domains-routing.module';

import { ResultComponent } from './result/result.component';
import { DomainComponent } from './domain/domain.component';
import { HistoryComponent } from './history/history.component';
import { FormContainerComponent } from './form-container/form-container.component';

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
    FormContainerComponent
  ]
})
export class DomainsModule { }
