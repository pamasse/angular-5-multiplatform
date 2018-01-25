import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormContainerComponent } from './form-container/form-container.component';
import {BackgroundComponent} from './background/background.component';
import {RouterGuard} from './router.guard';

const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: 'formContainer', component: FormContainerComponent, canActivate: [RouterGuard] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RouterGuard],
  exports: [RouterModule]
})
export class WebExtRoutingModule {}
