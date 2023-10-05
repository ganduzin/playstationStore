import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  {
    path:"",
    component: IndexComponent
  },
  {
    path:"game-page",
    component:GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
