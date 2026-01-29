import { Component, Input, input } from '@angular/core';
import { BestmoviesInterface } from '../interface/bestmovies';

@Component({
  selector: 'app-bestmovies',
  imports: [],
  templateUrl: './bestmovies.html',
  styleUrl: './bestmovies.css',
})
export class BestMovies {
  @Input({required:true}) bestMovie!: BestmoviesInterface;
}
