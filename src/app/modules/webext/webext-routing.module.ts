import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormContainerComponent } from './browser-action/form-container.component';
import {BackgroundComponent} from './background/background.component';
import {RouterGuard} from './router.guard';
import {PageActionComponent} from "./page-action/page-action.component";

const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: 'pageAction', component: PageActionComponent },
  { path: 'formContainer', component: FormContainerComponent, canActivate: [RouterGuard] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RouterGuard],
  exports: [RouterModule]
})
export class WebExtRoutingModule {}
