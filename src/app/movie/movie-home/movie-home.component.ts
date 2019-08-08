import { Component, OnInit } from '@angular/core';
import { Movie } from '../+state/movie.model';
import { MovieService } from '../+state/movie.service';
import { MovieQuery } from '../+state/movie.query';
import { Observable } from 'rxjs';
import { Order } from '@datorama/akita';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap, startWith } from 'rxjs/operators'; //for Observable

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
  })

  constructor(private query: MovieQuery, private service: MovieService) { }

  ngOnInit() {
    this.movies$ = this.sortByForm.valueChanges.pipe( // Listen on changes from the control
      startWith(this.sortByForm.value), // valueChanges trigger only on change, use startWith to "mock" the first change
      switchMap(({sortBy, sortByOrder}) => this.query.selectAll({sortBy, sortByOrder}))
      );
    this.service.get();
  }

}
