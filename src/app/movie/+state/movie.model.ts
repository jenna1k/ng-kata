import { ID } from '@datorama/akita';

export interface Movie {
  id: string;
  cover_url: string;
  description: string;
  title: string;
  rating: number;
}

/**
 * A factory function that creates Movie
 */
export function createMovie(params: Partial<Movie>) {
  return {

  } as Movie;
}
