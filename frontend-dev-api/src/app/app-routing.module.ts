import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesenvolvedoresComponent } from './views/desenvolvedores/desenvolvedores.component';
import { DesenvolvedorCreateComponent } from './components/desenvolvedor/desenvolvedor-create/desenvolvedor-create.component'

const routes: Routes = [
  {
    path: "",
    component: DesenvolvedoresComponent
  },
  {
    path: "desenvolvedor/create",
    component: DesenvolvedorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
