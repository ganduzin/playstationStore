import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      game-page works!
    </p>
  `,
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

}
