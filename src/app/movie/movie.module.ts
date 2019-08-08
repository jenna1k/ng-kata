import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Component
import { MovieHomeComponent } from './movie-home/movie-home.component';
// Material
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [MovieHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    // Material
    MatCardModule
  ],
  exports: [
    MovieHomeComponent
  ]
})
export class MovieModule { }
