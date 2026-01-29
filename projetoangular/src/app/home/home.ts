import { Component } from '@angular/core';
import { BestMovies } from '../bestmovies/bestmovies';
import { BestmoviesInterface } from '../interface/bestmovies';


@Component({
  selector: 'app-home',
  imports: [BestMovies],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  movieList: BestmoviesInterface[] = [
    {
      id: 1,
      nome: "The Godfather",
      classificacao: 14,
      avaliacao: 100,
      data: "07/07/1972",
      photo: "https://m.media-amazon.com/images/M/MV5BYTRmMjkwYzYtYTRiMi00NDJjLTk1NjctMDA3MjY2ZWIyMGQ5XkEyXkFqcGc@._V1_.jpg"
    },

    {
      id: 2,
      nome: "Schindler's List",
      classificacao: 16,
      avaliacao: 95,
      data: "31/12/1993",
      photo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1d/SchindlerPoster.jpg/250px-SchindlerPoster.jpg',
    },
    {
      id: 3,
      nome: "The Shawshank Redemption",
      classificacao: 16,
      avaliacao: 82,
      data: "17/03/1995",
      photo: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/16/48/20083748.jpg"
    },
    {
      id: 4,
      nome: "Forrest Gump",
      classificacao: 14,
      avaliacao: 82,
      data: "07/12/1994",
      photo: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/ForrestGumpPoster.jpg/250px-ForrestGumpPoster.jpg"
    },
    {
      id: 5,
      nome: "The Lion King(1994)",
      classificacao: 10,
      avaliacao: 88,
      data: "08/07/1994",
      photo: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b3/The_Lion_King.jpg/250px-The_Lion_King.jpg"
    },
    {
      id: 6,
      nome:"The Green Mile",
      classificacao:16,
      avaliacao:87,
      data:"10/03/2000",
      photo: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8f/%C3%80_Espera_de_um_Milagre.jpg/298px-%C3%80_Espera_de_um_Milagre.jpg"
    },
    {
      id:7,
      nome:"The Lord of the Rings: The Return of the King",
      classificacao:14,
      avaliacao:94,
      data:"25/12/2003",
      photo:"https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/EsdlaIII.jpg/250px-EsdlaIII.jpg"
    },
    {
      id:8,
      nome:"The Dark Knight",
      classificacao:14,
      avaliacao:85,
      data:"18/07/2008",
      photo:"https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg"
    },
    {
      id:9,
      nome:"Avatar",
      classificacao:10,
      avaliacao:83,
      data:"18/12/2009",
      photo:"https://upload.wikimedia.org/wikipedia/pt/thumb/b/b0/Avatar-Teaser-Poster.jpg/250px-Avatar-Teaser-Poster.jpg"
    },
    {
      id:10,
      nome:"Avengers:Endgame",
      classificacao:12,
      avaliacao:78,
      data:"26/04/2019",
      photo:"https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
    }
  ]
}
