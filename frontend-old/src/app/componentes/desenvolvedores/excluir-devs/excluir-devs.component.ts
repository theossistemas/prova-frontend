import { Component, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedor.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-excluir-devs',
  standalone: true,
  imports: [],
  templateUrl: './excluir-devs.component.html',
  styleUrl: './excluir-devs.component.css'
})
export class ExcluirDevsComponent implements OnInit {
  desenvolvedor: Desenvolvedor = {
    id: "string",
    nome: "string",
    email: "string@exemplo.com.br",
    cidade: "string",
    profissao: "string",
    tecnologias: "string",
    avatar: "string",
    github: "string",
  }
  constructor(
    private service: DesenvolvedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe(desenvolvedor => {
      this.desenvolvedor = desenvolvedor;
    })
  }

  excluirDesenvolvedor(){
    if(this.desenvolvedor.id){
      this.service.excluir(String(this.desenvolvedor.id)).subscribe(() => {
        this.router.navigate(['/listarDesenvolvedores']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarDesenvolvedores']);
  }
}
