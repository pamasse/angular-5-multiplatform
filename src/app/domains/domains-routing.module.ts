import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultComponent } from './result/result.component';
import { DomainComponent } from './domain/domain.component';

const routes: Routes = [
  { path: 'domainCheck', component: DomainComponent, data: [{preDelegated: false}] },
  { path: 'preDelegatedDomainCheck', component: DomainComponent, data: [{preDelegated: true}] },
  { path: 'result/:resultID', component: ResultComponent, data: [{directAccess: true}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule {}
