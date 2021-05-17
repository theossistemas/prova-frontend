import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: '/', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)},
          { path: 'novo-cadastro', loadChildren: () => import('./developer/form/form.module').then(m => m.FormModule)},
          { path: 'meus-dados', loadChildren: () => import('./developer/form/form.module').then(m => m.FormModule)},
          { path: 'devs', loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule)},
        ]
      }
  ];
  @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
