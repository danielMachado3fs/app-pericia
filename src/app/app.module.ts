import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateModule } from './pages/template/template.module';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TemplateModule, RouterModule.forRoot([])],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
