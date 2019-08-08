import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Component
import { MovieHomeComponent } from './movie-home/movie-home.component';



@NgModule({
  declarations: [MovieHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MovieHomeComponent
  ]
})
export class MovieModule { }
