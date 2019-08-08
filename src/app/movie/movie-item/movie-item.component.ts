import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../+state/movie.model';

@Component({
  selector: '[movie]movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent{

  @Input() movie: Movie;
  @Output() selected= new EventEmitter<Movie['id']>(); // Movie['id'] = string

  constructor() { }

}
