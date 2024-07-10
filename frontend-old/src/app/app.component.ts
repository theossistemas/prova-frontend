import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { CadastroDevsComponent } from "./componentes/desenvolvedores/cadastro-devs/cadastro-devs.component";
import { CommonModule } from '@angular/common';
import { DesenvolvedorComponent } from "./componentes/desenvolvedores/desenvolvedor/desenvolvedor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, CadastroDevsComponent, RouterLink, CommonModule, DesenvolvedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
