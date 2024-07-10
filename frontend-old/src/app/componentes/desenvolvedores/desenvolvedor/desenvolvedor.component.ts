import { Component, Input, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desenvolvedor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './desenvolvedor.component.html',
  styleUrl: './desenvolvedor.component.css'
})
export class DesenvolvedorComponent implements OnInit{
  @Input() desenvolvedor: Desenvolvedor = {
    id: 0,
    nome: "Exemplo de nome",
    email: "exemploDeEmail@exemplo.com.br",
    cidade: "Maringá",
    profissao: "Programador",
    tecnologias: "angular, node, react, vue, etc...",
    avatar: "http://imagem-online.png",
    github: "https://github.com.br/exemplo"
  }
  constructor() { }

  ngOnInit(): void {
  }
}
