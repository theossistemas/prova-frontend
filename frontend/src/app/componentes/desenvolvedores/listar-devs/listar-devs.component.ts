import { Component, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedor.service';
@Component({
  selector: 'app-listar-devs',
  templateUrl: './listar-devs.component.html',
  styleUrls: ['./listar-devs.component.css']
})
export class ListarDevsComponent implements OnInit {
  listaDesenvolvedores: Desenvolvedor[] = [];
  paginaAtual: number = 1
  haMaisDesenvolvedores: boolean = true;
  filtro: string = ''
  exibidosAtualmente = 6

  constructor(private service: DesenvolvedorService) { }
  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaDesenvolvedores) => {
      this.listaDesenvolvedores = listaDesenvolvedores[0];
    })
  }

  carregarMaisDesenvolvedores() {
    this.service.listar(++this.paginaAtual).subscribe((listaDesenvolvedores) => {
      this.listaDesenvolvedores.push(...listaDesenvolvedores[0]);
      if(!this.listaDesenvolvedores.length){
        this.haMaisDesenvolvedores = false;
      }
    })
    this.exibidosAtualmente += 6

  }

  pesquisarDesenvolvedores() {
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaDesenvolvedores => {
        this.listaDesenvolvedores = listaDesenvolvedores[0]
      })
  }
}
