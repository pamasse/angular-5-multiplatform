import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormComponent } from './form/form.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import {FooterComponent} from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import {NavigationComponent} from './navigation/navigation.component';

import {RomanizePipe} from './pipes/romanize.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {FilterByCategoriesPipe} from './pipes/filter-by-categories.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    RouterModule.forChild([])
  ],
  declarations: [
    FormComponent,
    HeaderPageComponent,
    FooterComponent,
    NavigationComponent,
    AlertComponent,
    FilterPipe,
    FilterByCategoriesPipe,
    RomanizePipe
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    /* 3rd party lib*/
    NgbModule,
    TranslateModule,
    /* Our stuff */
    FormComponent,
    HeaderPageComponent,
    FooterComponent,
    NavigationComponent,
    AlertComponent,
    FilterPipe,
    FilterByCategoriesPipe,
    RomanizePipe
  ]
})
export class SharedModule { }
