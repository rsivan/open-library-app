import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectPagePageRoutingModule } from './subject-page-routing.module';

import { SubjectPagePage } from './subject-page.page';
import { WorksComponent } from '../../components/works/works.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectPagePageRoutingModule
  ],
  declarations: [
    SubjectPagePage,
    WorksComponent,
    SearchInputComponent,
  ]
})
export class SubjectPagePageModule {}
