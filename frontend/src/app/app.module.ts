import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CadastroDevsComponent } from './componentes/desenvolvedores/cadastro-devs/cadastro-devs.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarDevsComponent } from './componentes/desenvolvedores/listar-devs/listar-devs.component';
import { DesenvolvedorComponent } from './componentes/desenvolvedores/desenvolvedor/desenvolvedor.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirDevsComponent } from './componentes/desenvolvedores/excluir-devs/excluir-devs.component';
import { EditarDevsComponent } from './componentes/desenvolvedores/editar-devs/editar-devs.component';
import { BotaoCarregarMaisComponent } from './componentes/desenvolvedores/listar-devs/botao-carregar-mais/botao-carregar-mais.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ExcluirDevsComponent,
    EditarDevsComponent,
    ListarDevsComponent,
    DesenvolvedorComponent,
    BotaoCarregarMaisComponent,
    CabecalhoComponent,
    CadastroDevsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







