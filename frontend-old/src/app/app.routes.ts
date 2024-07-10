
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDevsComponent } from './componentes/desenvolvedores/listar-devs/listar-devs.component';
import { ExcluirDevsComponent } from './componentes/desenvolvedores/excluir-devs/excluir-devs.component';
import { EditarDevsComponent } from './componentes/desenvolvedores/editar-devs/editar-devs.component';
import { Desenvolvedor } from './componentes/desenvolvedores/desenvolvedor';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: 'listarDesenvolvedores',
  component: ListarDevsComponent
  },
  {
    path: '',
    redirectTo: '/listarDesenvolvedores',
    pathMatch: 'full'
  },
  {
    path:'desenvolvedores/excluirDesenvolvedor/:id',
    component: ExcluirDevsComponent
  },
  {
    path:'desenvolvedores/editarDesenvolvedor/:id',
    component: EditarDevsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
exports: [RouterModule]
})
export class AppRoutingModule { }
