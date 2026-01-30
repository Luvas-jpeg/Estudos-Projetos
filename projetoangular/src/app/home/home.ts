import { Component, inject } from '@angular/core';
import { BestMovies } from '../bestmovies/bestmovies';
import { BestmoviesInterface } from '../interface/bestmovies';
import { MoviesService } from '../service/movies.service';
import { RouterLink } from "@angular/router";

// Component Home da aplicação, é aqui que fica a página inicial do site
@Component({
  selector: 'app-home', //O elemento html q identifica o html do componente
  imports: [BestMovies, RouterLink], //Ferramentas que iriei utilizar no projeto
  standalone: true, //Isso torna o componente independente??
  templateUrl: './home.html', // HTMÇ a ser utilizado no componente
  styleUrl: './home.css',// Estilização CSS do compoenente
  providers:[MoviesService]// A lógica de negócio que este componente irá utilizar
})
export class Home {
  movieList: BestmoviesInterface[] = []; // estou criando uma lista que segue um modelo pré-definido(Interface)
  movieService = inject(MoviesService); // Injeção de Dependência do Angular, este arquivo ele precisa de um ajudante para conseguir realizar seu ojetivo, eu faço uma relação que este arquivo com seu ajudante
  constructor(){ // Aqui estou construindo uma classe vazia, só irei utilizar as funções
    this.movieList = this.movieService.getAllListMovie();  // Isso aqui acessa a movieList criada fora deste objeto e utiliza uma função que pertence ao MovieService
  }
}
