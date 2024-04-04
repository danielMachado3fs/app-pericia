import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TemplateComponent,
    children: [
      /* 
       * LoadChildren é utilizado para que o módulo seja carregado apenas quando essa rota for chamada.
       * No HomeRoutingModule, o path inicial será '' pois o path 'home' ja está definido aqui para chamar 
       * esse componente sendo assim, deve ser definido apenas os path dos componentes filhos caso houver 
       * para que a rota fique 'homo/[pathChildren]'
      */
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
