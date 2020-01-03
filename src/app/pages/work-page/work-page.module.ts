import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkPagePageRoutingModule } from './work-page-routing.module';

import { WorkPagePage } from './work-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPagePageRoutingModule
  ],
  declarations: [WorkPagePage]
})
export class WorkPagePageModule {}
