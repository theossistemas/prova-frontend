import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-devs',
    loadChildren: () => import('./pages/list-devs/list-devs.module').then(m => m.ListDevsModule)
  },
  {
    path: 'register-dev',
    loadChildren: () => import('./pages/register-dev/register-dev.module').then(m => m.RegisterDevModule)
  },
  {
    path: '',
    redirectTo: '/list-devs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
