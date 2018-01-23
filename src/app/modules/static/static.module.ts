import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@modules/shared';

import { FaqComponent } from './faq/faq.component';

import {MarkdownModule} from 'angular2-markdown';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StaticRoutingModule} from './static-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    StaticRoutingModule,

    MarkdownModule
  ],
  declarations: [FaqComponent, PageNotFoundComponent]
})
export class StaticModule { }
