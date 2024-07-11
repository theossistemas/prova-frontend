import { Component } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedores/desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedores/desenvolvedor.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  listaDesenvolvedores: Desenvolvedor[] = [];
  paginaAtual: number = 1
  haMaisDesenvolvedores: boolean = true;
  filtro: string = ''

  constructor(private service: DesenvolvedorService) { }

  pesquisarDesenvolvedores() {
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaDesenvolvedores => {
        this.listaDesenvolvedores = listaDesenvolvedores[0]
      })
  }
}
