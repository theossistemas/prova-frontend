import { Component, Input, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedor.service';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.component.html',
  styleUrls: ['./desenvolvedor.component.css']
})
export class DesenvolvedorComponent implements OnInit{
  @Input() desenvolvedor: Desenvolvedor = {
    _id: "string",
    nome: "Exemplo de nome",
    email: "exemploDeEmail@exemplo.com.br",
    cidade: "Maringá",
    profissao: "Programador",
    tecnologias: "angular, node, react, vue, etc...",
    avatar: "http://imagem-online.png",
    github: "exemplo"
  }

  foto_github: string = ""

  constructor( private service:DesenvolvedorService) { }

  ngOnInit(): void {
    this.service.buscarFotoGithub(this.desenvolvedor.github).subscribe((foto) => {
      this.foto_github = foto.avatar_url;
    }
    )

  }
}
