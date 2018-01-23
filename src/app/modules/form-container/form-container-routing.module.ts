import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormContainerComponent} from './form-container/form-container.component';
import {DomainComponent} from '../domains/domain/domain.component';
import {ResultComponent} from '../domains/result/result.component';

const routes: Routes = [{ path: 'formContainer', component: FormContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerRoutingModule {}
