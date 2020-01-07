import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectPagePageRoutingModule } from './subject-page-routing.module';

import { SubjectPagePage } from './subject-page.page';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectPagePageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [
    SubjectPagePage,
  ]
})
export class SubjectPagePageModule {}
