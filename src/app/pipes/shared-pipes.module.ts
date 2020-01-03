import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaPipe } from './meta.pipe';



@NgModule({
  declarations: [MetaPipe],
  imports: [
    CommonModule
  ],
  exports: [
    MetaPipe
  ]
})
export class SharedPipesModule { }
