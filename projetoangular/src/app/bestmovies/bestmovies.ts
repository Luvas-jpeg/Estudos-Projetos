import { Component, Input, input } from '@angular/core'; //Ferramentas importantes do Angular
import { BestmoviesInterface } from '../interface/bestmovies';

@Component({
  selector: 'app-bestmovies',
  imports: [],
  templateUrl: './bestmovies.html',
  styleUrl: './bestmovies.css',
})
export class BestMovies {
  @Input({required:true}) bestMovie!: BestmoviesInterface; //A informação requerida que está no html do home, ela vai receber as informações que passei do home pra cá
}
