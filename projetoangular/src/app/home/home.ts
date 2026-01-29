import { Component, inject } from '@angular/core';
import { BestMovies } from '../bestmovies/bestmovies';
import { BestmoviesInterface } from '../interface/bestmovies';
import { MoviesService } from '../service/movies.service';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [BestMovies, RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[MoviesService]
})
export class Home {
  movieList: BestmoviesInterface[] = [];
  movieService = inject(MoviesService);

  constructor(){
    this.movieList = this.movieService.getAllListMovie();
  }
}
