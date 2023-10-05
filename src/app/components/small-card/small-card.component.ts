import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
  <div class="small-card">
    <a class="small-card-link" [routerLink]="['game-page']">
      <img class="image" [src]='smallImage'>
    </a>
  </div>
    
  `,
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  id:number = 0
  @Input()
  name:string = ''
  @Input()
  smallImage:string = ''

  
}
