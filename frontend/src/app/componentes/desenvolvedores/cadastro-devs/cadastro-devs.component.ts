import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesenvolvedorService } from '../desenvolvedor.service';
import { Component, ViewContainerRef } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-cadastro-devs',
  templateUrl: './cadastro-devs.component.html',
  styleUrls: ['./cadastro-devs.component.css']
})
export class CadastroDevsComponent {
  devForm: FormGroup;

  constructor(private fb: FormBuilder, private service: DesenvolvedorService) {
    this.devForm = this.fb.group({
      github: ['', Validators.required],
      avatar: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cidade: ['', Validators.required],
      profissao: ['', Validators.required],
      tecnologias: ['', Validators.required]
    });
  }

  errorNotification(){
    Swal.fire('ERRO', 'Desenvolvedor já cadastrado', 'error')
  }

  confirmarInsercao(){
    Swal.fire({
      title: "Inserir utilizando usuario github?",
      text: "ao clicar em sim, os campos serão preenchidos automaticamente!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, Auto Preencher!",
      cancelButtonText: "Não, Vou Preencher!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.preencherGitHub();
      }
    });
  }

  preencherGitHub() {
    const github = this.devForm.get('github')?.value;
    if (github) {

      fetch(`https://api.github.com/users/${github}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.avatar_url != null) {
            this.devForm.patchValue({ avatar: data.avatar_url });
          }

          if (data.name != null) {
            this.devForm.patchValue({ nome: data.name });
          }

          if (data.email != null) {
            this.devForm.patchValue({ email: data.email });
          }

          if (data.location != null) {
            this.devForm.patchValue({ cidade: data.location });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  cadastrarDev() {
    if (this.devForm.valid) {
      const formValues = this.devForm.value;
      this.service.listar(0).subscribe((devs) => {
        const dev = devs[0].find((d: { github: any; }) => d.github == formValues.github);
        if (dev) {
          this.errorNotification()

        } else {
          this.service.criar(formValues).subscribe(() => {
            window.location.href = '/listarDesenvolvedores';
          });
        }
      });


  }else{
    this.devForm.markAllAsTouched();
  }
}
}



