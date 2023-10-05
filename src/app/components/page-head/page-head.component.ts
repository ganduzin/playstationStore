import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakComponent } from '../break/break.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-head',
  standalone: true,
  imports: [CommonModule, BreakComponent,RouterLink],
  template: `
    <div class="head">
     <a [routerLink]="['']">
      <img class="logo" src="https://logodownload.org/wp-content/uploads/2018/09/playstation-store-logo.png" alt="playstation store logo">
     </a> 
    <div class="menu">
      <ul class="menu-list">
        <li class="menu-item">Novidades</li>
        <li class="menu-item">Coleções</li>
        <li class="menu-item">Ofertas</li>
        <li class="menu-item">PS5</li>
        <li class="menu-item">Assinaturas</li>
        <li class="menu-item">Navegar</li>
      </ul>
    </div>
   

  `,
  styleUrls: ['./page-head.component.css']
})
export class PageHeadComponent {

}
