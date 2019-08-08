import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Component
import { MovieHomeComponent } from './movie-home/movie-home.component';
// Material
import { MatSelectModule } from '@angular/material/select';
import  {MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'



@NgModule({
  declarations: [MovieHomeComponent, MovieItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MovieHomeComponent
  ]
})
export class MovieModule { }
