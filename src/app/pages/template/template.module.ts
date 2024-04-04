import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent, SidebarComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
})
export class TemplateModule { }
