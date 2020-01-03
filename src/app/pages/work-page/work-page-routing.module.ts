import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkPagePage } from './work-page.page';

const routes: Routes = [
  {
    path: '',
    component: WorkPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkPagePageRoutingModule {}
