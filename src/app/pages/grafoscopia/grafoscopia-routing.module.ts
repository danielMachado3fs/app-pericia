import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafoscopiaComponent } from './grafoscopia.component';

const routes: Routes = [
  {
    path: '',
    component: GrafoscopiaComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrafoscopiaRoutingModule {}
