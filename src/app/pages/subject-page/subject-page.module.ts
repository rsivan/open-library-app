import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectPagePageRoutingModule } from './subject-page-routing.module';

import { SubjectPagePage } from './subject-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectPagePageRoutingModule
  ],
  declarations: [SubjectPagePage]
})
export class SubjectPagePageModule {}
