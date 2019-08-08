import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { MovieStore } from './movie.store';
import { Movie } from './movie.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private movieStore: MovieStore,
              private http: HttpClient) {
  }

  get() {
    // return observable
    this.movieStore.setLoading(true);
    return this.http.get<Movie[]>('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
    .subscribe(entities => {
      this.movieStore.upsertMany(entities); // update or set
      this.movieStore.setLoading(false);
    });  // don't have to unsubscribe because it's not the stream. (get - request once)
  }

  add(movie: Movie) {
    this.movieStore.add(movie);
  }

  update(id, movie: Partial<Movie>) {
    this.movieStore.update(id, movie);
  }

  remove(id: ID) {
    this.movieStore.remove(id);
  }
}
