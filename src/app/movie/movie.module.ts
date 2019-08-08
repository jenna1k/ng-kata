import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Component
import { MovieHomeComponent } from './movie-home/movie-home.component';
// Material
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [MovieHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    MovieHomeComponent
  ]
})
export class MovieModule { }
