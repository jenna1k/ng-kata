import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Component
import { MovieHomeComponent } from './movie-home/movie-home.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    MovieHomeComponent
  ]
})
export class MovieModule { }
