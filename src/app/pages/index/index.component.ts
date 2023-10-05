import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { BreakComponent } from 'src/app/components/break/break.component';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, 
    BigCardComponent, 
    SmallCardComponent, 
    BreakComponent],
  template: `
    <app-break></app-break>
    <app-big-card></app-big-card>
    <app-break></app-break>
    <div class="small-card-grid">
      <app-small-card *ngFor="let data of dataFake" smallImage={{data.smallImage}} ></app-small-card>
    </div>
    
  `,
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  dataFake:any[] = []

  constructor() {
    this.dataFake = dataFake
  }

}
