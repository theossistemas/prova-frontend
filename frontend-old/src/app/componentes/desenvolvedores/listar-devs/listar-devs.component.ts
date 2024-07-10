import { Component, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedor.service';
import { DesenvolvedorComponent } from "../desenvolvedor/desenvolvedor.component";
import { BotaoCarregarMaisComponent } from "./botao-carregar-mais/botao-carregar-mais.component";
import { NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-devs',
  standalone: true,
  imports: [DesenvolvedorComponent, BotaoCarregarMaisComponent, NgFor, CommonModule],
  templateUrl: './listar-devs.component.html',
  styleUrl: './listar-devs.component.css'
})
export class ListarDevsComponent implements OnInit {
  listaDesenvolvedores: Desenvolvedor[] = [];
  paginaAtual: number = 1
  haMaisDesenvolvedores: boolean = true;

  constructor(private service: DesenvolvedorService) { }
  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaDesenvolvedores) => {
      this.listaDesenvolvedores = listaDesenvolvedores;
    })
  }

  carregarMaisDesenvolvedores() {
    this.service.listar(++this.paginaAtual).subscribe((listaDesenvolvedores) => {
      this.listaDesenvolvedores.push(...listaDesenvolvedores);
      if(!this.listaDesenvolvedores.length){
        this.haMaisDesenvolvedores = false;
      }
    })
  }
}
