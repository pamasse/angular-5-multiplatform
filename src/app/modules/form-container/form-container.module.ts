import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormContainerRoutingModule} from './form-container-routing.module';
import {SharedModule} from '../shared';
import {FormContainerComponent} from './form-container/form-container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    /* Routing */
    FormContainerRoutingModule
  ],
  declarations: [FormContainerComponent]
})
export class FormContainerModule { }
