import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  declarations: [TemplateComponent]
})
export class TemplateModule { }
