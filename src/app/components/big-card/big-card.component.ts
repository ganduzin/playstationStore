import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="card-wrapper">
    <img class="image" src="https://blog.br.playstation.com/tachyon/sites/4/2023/02/babee9c954509a0d34a67e7d125b679096ef9d79-scaled.jpg" alt="">
    <div class="details">
      <div class="stack-left">
        <h2 class="game-name"> BALDURS GATE </h2>
        <h3 class="game-description">LET THE PARTY START ON THIS GENRE-DEFINING RPG</h3>
      </div>
      <div class="stack-right">
        <a class="buy-button" [routerLink]="['game-page']">Avaible Now</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

}
