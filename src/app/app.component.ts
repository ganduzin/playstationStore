import { Component } from '@angular/core';
import { PageHeadComponent } from './components/page-head/page-head.component';

@Component({
  selector: 'app-root',
  template: `
    <app-page-head></app-page-head>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps-store';
}
