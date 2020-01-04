import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorPageRoutingModule } from './author-routing.module';

import { AuthorPage } from './author.page';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [AuthorPage]
})
export class AuthorPageModule {}
