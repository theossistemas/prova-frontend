import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDevsComponent } from './componentes/desenvolvedores/listar-devs/listar-devs.component';
import { ExcluirDevsComponent } from './componentes/desenvolvedores/excluir-devs/excluir-devs.component';
import { EditarDevsComponent } from './componentes/desenvolvedores/editar-devs/editar-devs.component';
import { ParameterCheckGuard } from './parameter-check.guard';

const routes: Routes = [
  { path: 'listarDesenvolvedores',
  component: ListarDevsComponent
  },
  {
    path: '',
    redirectTo: '/listarDesenvolvedores',
    pathMatch: 'full'
  },

  {
    path:'excluirDesenvolvedor/:id',
    component: ExcluirDevsComponent,
    canActivate: [ParameterCheckGuard]
  },
  {
    path:'editarDesenvolvedor/:id',
    component: EditarDevsComponent,
    canActivate: [ParameterCheckGuard]
  },
  {
    path: 'editarDesenvolvedor',
    redirectTo: '/listarDesenvolvedores',
    pathMatch: 'full'
  },
  {
    path: 'excluirDesenvolvedor',
    redirectTo: '/listarDesenvolvedores',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
