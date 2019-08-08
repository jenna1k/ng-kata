import { Component, OnInit } from '@angular/core';
import { Movie } from '../+state/movie.model';
import { MovieService } from '../+state/movie.service';
import { MovieQuery } from '../+state/movie.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  movie$: Observable<Movie[]>; // observable$ naming convention
  constructor(private query: MovieQuery, private service: MovieService) { }

  ngOnInit() {
    this.movie$ = this.query.selectAll();
    this.service.get();
  }

}
