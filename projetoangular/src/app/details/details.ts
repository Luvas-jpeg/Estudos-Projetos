import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { BestmoviesInterface } from '../interface/bestmovies';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
  providers:[MoviesService]
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MoviesService);
  bestMovie: BestmoviesInterface | undefined;

  constructor() {
    const movieListId = Number(this.route.snapshot.params['id'])
    this.bestMovie = this.movieService.getMovieByID(movieListId)
  }
}
