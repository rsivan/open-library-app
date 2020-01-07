import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from '../works/works.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { SubjectsBrowserComponent } from '../subjects-browser/subjects-browser.component';


@NgModule({
  declarations: [
    SearchInputComponent,
    SubjectsBrowserComponent,
    SubtitleComponent,
    WorksComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    SearchInputComponent,
    SubjectsBrowserComponent,
    SubtitleComponent,
    WorksComponent,
  ]
})
export class SharedComponentsModule { }
