import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Movie } from './movie.model';

export interface MovieState extends EntityState<Movie> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'movie' })
export class MovieStore extends EntityStore<MovieState> {

  constructor() {
    super();
  }

  akitaPreAddEntity(movie: Movie) {
    if (movie.cover_url) {
      return {
        ...movie,
        cover_url: movie.cover_url.replace('http://', 'https://')
      }
    } else {
      return {
        ...movie,
        cover_url: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
      }
    }

  }
}

