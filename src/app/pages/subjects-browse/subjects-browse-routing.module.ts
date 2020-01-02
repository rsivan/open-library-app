import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsBrowsePage } from './subjects-browse.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectsBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsBrowsePageRoutingModule {}
