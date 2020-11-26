import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DesenvolvedorService } from './desenvolvedor/desenvolvedor.service';
import { CadastroDesenvolvedorComponent } from './cadastro-desenvolvedor/cadastro-desenvolvedor.component';
import { ListaDesenvolvedorComponent } from './lista-desenvolvedor/lista-desenvolvedor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CadastroDesenvolvedorComponent,
    ListaDesenvolvedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [DesenvolvedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
