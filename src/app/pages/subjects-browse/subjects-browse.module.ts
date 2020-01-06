import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsBrowsePageRoutingModule } from './subjects-browse-routing.module';

import { SubjectsBrowsePage } from './subjects-browse.page';
import { SubjectsBrowserComponent } from '../../components/subjects-browser/subjects-browser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsBrowsePageRoutingModule
  ],
  declarations: [
    SubjectsBrowsePage,
    SubjectsBrowserComponent,
  ]
})
export class SubjectsBrowsePageModule {}
