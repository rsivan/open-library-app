import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectPagePage } from './subject-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectPagePageRoutingModule {}
