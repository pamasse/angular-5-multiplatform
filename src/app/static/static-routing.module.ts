import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'pageNotFound',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
