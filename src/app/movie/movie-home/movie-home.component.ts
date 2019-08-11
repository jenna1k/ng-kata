import { Component, OnInit } from '@angular/core';
import { Movie } from '../+state/movie.model';
import { MovieService } from '../+state/movie.service';
import { MovieQuery } from '../+state/movie.query';
import { Observable } from 'rxjs';
import { Order } from '@datorama/akita';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap, startWith } from 'rxjs/operators'; //for Observable
import { MovieStore } from '../+state/movie.store'; // for Output in movie-item
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  movies$: Observable<Movie[]>; // observable$ naming convention
  sortByForm = new FormGroup({
    sortBy: new FormControl('title'),
    sortByOrder: new FormControl(Order.DESC)
  });
  movieForm = new FormGroup({   // for Output in movie-item
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private query: MovieQuery,
    private service: MovieService,
    private store: MovieStore,
  ) { }

  ngOnInit() {
    this.movies$ = this.sortByForm.valueChanges.pipe( // Listen on changes from the control
      startWith(this.sortByForm.value), // valueChanges trigger only on change, use startWith to "mock" the first change
      switchMap(({sortBy, sortByOrder}) => this.query.selectAll({sortBy, sortByOrder}))
    );
    this.service.get();
    // this.query.selectActive(); // selectActive() -> Observable<Movie>
    // this.query.selectActiveId(); // selectActive() -> Observable<Movie['id']>
    // this.query.selectAll(); // selectAll() -> Observable<Movie[]>
    // this.query.getActive(); // getActive() -> Movie
    // this.query.getActiveId(); // getActiveId() -> Movie['id']
    // this.query.getAll(); // getAll() -> Movie[]
  }

  selectMovie(id: string) {
    console.log(id);
    this.store.setActive(id);
    const movie = this.query.getActive(); // getActive() -> Movie
    this.movieForm.patchValue(movie);
  }

  updateActiveMovie() {
    const movieId = this.query.getActiveId(); // getActiveId() -> Movie['id']
    const updatedMovie = this.movieForm.value;
    this.store.update(movieId, updatedMovie);
  }

}
