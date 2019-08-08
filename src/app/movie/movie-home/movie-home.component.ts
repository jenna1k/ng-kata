import { Component, OnInit } from '@angular/core';
import { Movie } from '../+state/movie.model';
import { MovieService } from '../+state/movie.service';
import { MovieQuery } from '../+state/movie.query';
import { Observable } from 'rxjs';
import { Order } from '@datorama/akita';
import { FormControl } from '@angular/forms';
import { switchMap, startWith } from 'rxjs/operators'; //for Observable

@Component({
  selector: 'movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  movies$: Observable<Movie[]>; // observable$ naming convention
  sortByControl = new FormControl('rating');

  constructor(private query: MovieQuery, private service: MovieService) { }

  ngOnInit() {
    this.movies$ = this.sortByControl.valueChanges.pipe( // Listen on changes from the control
      startWith(this.sortByControl.value), // valueChanges trigger only on change, use startWith to "mock" the first change
      switchMap((sortBy) => this.query.selectAll({sortBy, sortByOrder: Order.DESC}))
      );
    this.service.get();
  }

}
