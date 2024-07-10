import { Component, OnInit } from '@angular/core';
import { Desenvolvedor } from '../desenvolvedor';
import { DesenvolvedorService } from '../desenvolvedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar-devs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-devs.component.html',
  styleUrl: './editar-devs.component.css'
})
export class EditarDevsComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: DesenvolvedorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((desenvolvedor) => {
      this.formulario = this.formBuilder.group({
        id: [desenvolvedor.id],
        nome: [desenvolvedor.nome, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        profissional: [desenvolvedor.profissao, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        avatar: [desenvolvedor.avatar, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        cidade: [desenvolvedor.cidade, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        email: [desenvolvedor.email, Validators.compose([
          Validators.required,
          Validators.email
        ])],
        tecnologias: [desenvolvedor.tecnologias, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3)
        ])]

      })
    })
  }

  editarDesenvolvedor(){
    this.service.editar(this.formulario.value).subscribe(() =>
    this.router.navigate(['/listarDesenvolvedores']))
  }

  cancelar(){
    this.router.navigate(['/listarDesenvolvedores'])
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }

}
