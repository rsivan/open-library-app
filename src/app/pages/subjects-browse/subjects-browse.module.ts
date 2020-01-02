import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsBrowsePageRoutingModule } from './subjects-browse-routing.module';

import { SubjectsBrowsePage } from './subjects-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsBrowsePageRoutingModule
  ],
  declarations: [SubjectsBrowsePage]
})
export class SubjectsBrowsePageModule {}
