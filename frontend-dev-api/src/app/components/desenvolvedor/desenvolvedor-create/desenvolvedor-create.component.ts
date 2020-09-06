import { Desenvolvedor } from './../desenvolvedor.model';
import { DesenvolvedorService } from './../desenvolvedor.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desenvolvedor-create',
  templateUrl: './desenvolvedor-create.component.html',
  styleUrls: ['./desenvolvedor-create.component.css']
})
export class DesenvolvedorCreateComponent implements OnInit {
   
  desenvolvedor: Desenvolvedor = {
    _id: '',
    nome: '',
    email: '',
    cidade: '',
    formacao: '',
    tecnologias: '',
    githubURL: '',
    avatarURL: ''      
  }

  constructor(private desenvolvedorService: DesenvolvedorService, private router: Router) { }

  ngOnInit(): void {

  }
  
  cadastrarComGithub(): void {
    this.desenvolvedorService.showMessage('Em desenvolvimento...')
  }

  createDesenvolvedor(): void {
    this.desenvolvedorService.create(this.desenvolvedor).subscribe(() => {
      this.desenvolvedorService.showMessage('Desenvolvedor cadastrado com sucesso!')
      this.router.navigate(['/'])
    })
  }
}
