import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
// o app.ts é bem importante, ele que armazena todos os compoentes que criei neste projeto e envia para o main.ts para executar este projeto
@Component({
  selector: 'app-root',
  imports: [Home, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetoangular');
}
