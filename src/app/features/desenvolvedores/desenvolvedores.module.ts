import { NgModule } from '@angular/core';
import { DesenvolvedoresRoutingModule } from './desenvolvedores-routing.module';
import { DesenvolvedorCadastroContainerComponent } from './containers/desenvolvedor-cadastro-container/desenvolvedor-cadastro-container.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { DesenvolvedorCadastroFormulario } from './components/desenvolvedor-cadastro-formulario/desenvolvedor-cadastro-formulario.component';
import { DesenvolvedorListaContainerComponent } from './containers/desenvolvedor-lista-container/desenvolvedor-lista-container.component';
import { DesenvolvedorListaComponent } from './components/desenvolvedor-lista/desenvolvedor-lista.component';
import { DesenvolvedorAtualizarContainerComponent } from './containers/desenvolvedor-atualizar-container/desenvolvedor-atualizar-container.component';
import { TopbarModule } from '../../core/topbar/components/topbar.component';
import { DesenvolvedorPrincipalContainerComponent } from './containers/desenvolvedor-principal-container/desenvolvedor-principal-container.component';


@NgModule({
    declarations: [
        DesenvolvedorCadastroContainerComponent,
        DesenvolvedorPrincipalContainerComponent,
        DesenvolvedorCadastroFormulario,
        DesenvolvedorListaContainerComponent,
        DesenvolvedorListaComponent,
        DesenvolvedorAtualizarContainerComponent,
    ],
    imports: [
        SharedModule,
        MatCardModule,
        DesenvolvedoresRoutingModule,
        TopbarModule,
    ]
})
export class DesenvolvedoresModule {
}
