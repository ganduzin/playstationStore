import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-break',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="break"></div>
  `,
  styleUrls: ['./break.component.css']
})
export class BreakComponent {

}
