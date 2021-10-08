import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'desenvolvedores'
    },
    {
        path: 'desenvolvedores',
        loadChildren: () => import('./features/desenvolvedores/desenvolvedores.module').then(modulo => modulo.DesenvolvedoresModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
