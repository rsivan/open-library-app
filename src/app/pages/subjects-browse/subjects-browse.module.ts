import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsBrowsePageRoutingModule } from './subjects-browse-routing.module';

import { SubjectsBrowsePage } from './subjects-browse.page';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsBrowsePageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [
    SubjectsBrowsePage,
  ]
})
export class SubjectsBrowsePageModule {}
