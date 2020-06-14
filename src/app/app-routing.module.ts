import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { AccessDeniedComponent } from './navigation/access-denied/access-denied.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module')
      .then(m => m.AccountModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./developer/developer.module')
      .then(m => m.DeveloperModule)
  },

  { path: '', redirectTo: 'developer/home', pathMatch: 'full' },

  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'acess-denied', component: AccessDeniedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
