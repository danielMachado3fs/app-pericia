import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GrafoscopiaRoutingModule } from './grafoscopia-routing.module';
import { GrafoscopiaComponent } from './grafoscopia.component';

@NgModule({
  imports: [
    CommonModule,
    GrafoscopiaRoutingModule
  ],
  declarations: [GrafoscopiaComponent]
})
export class GrafoscopiaModule { }
