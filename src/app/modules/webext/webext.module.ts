import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebExtRoutingModule} from './webext-routing.module';
import {SharedModule} from '@modules/shared';
import {CoreModule} from '@modules/core';
import {FormContainerComponent} from './form-container/form-container.component';
import { PageActionComponent } from './page-action/page-action.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    /* Routing */
    WebExtRoutingModule
  ],
  declarations: [FormContainerComponent, PageActionComponent, BackgroundComponent],
  exports: [
    FormContainerComponent
  ]
})
export class WebExtModule { }
