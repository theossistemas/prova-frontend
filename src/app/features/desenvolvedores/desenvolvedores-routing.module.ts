import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesenvolvedorResolver } from './resolvers/desenvolvedor.resolver';
import { DesenvolvedorAtualizarContainerComponent } from './containers/desenvolvedor-atualizar-container/desenvolvedor-atualizar-container.component';
import { DesenvolvedorPrincipalContainerComponent } from './containers/desenvolvedor-principal-container/desenvolvedor-principal-container.component';

const routes: Routes = [
    {
        path: '',
        component: DesenvolvedorPrincipalContainerComponent,
    },
    {
        path: ':idDesenvolvedor',
        component: DesenvolvedorAtualizarContainerComponent,
        resolve: {
            desenvolvedor: DesenvolvedorResolver,
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesenvolvedoresRoutingModule { }
