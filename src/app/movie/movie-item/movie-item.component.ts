import { Component, Input } from '@angular/core';
import { Movie } from '../+state/movie.model';

@Component({
  selector: '[movie]movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent{

  @Input() movie: Movie;

  constructor() { }

}
