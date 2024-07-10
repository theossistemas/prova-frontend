import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-devs',
  templateUrl: './cadastro-devs.component.html',
  styleUrls: ['./cadastro-devs.component.css']
})
export class CadastroDevsComponent {
  devForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.devForm = this.fb.group({
      githubUser: ['', Validators.required],
      avatarUrl: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cidade: ['', Validators.required],
      profissao: ['', Validators.required],
      tecnologias: ['', Validators.required]
    });
  }


  preencherGitHub() {
    const github = this.devForm.get('githubUser')?.value;
    if (github) {
      fetch(`https://api.github.com/users/${github}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.avatar_url != null) {
            this.devForm.patchValue({ avatarUrl: data.avatar_url });
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
      console.log(formValues);

    fetch('http://localhost:8000/new/dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: this.devForm.get('nome')?.value,
        email: this.devForm.get('email')?.value,
        cidade: this.devForm.get('cidade')?.value,
        profissao: this.devForm.get('profissao')?.value,
        tecnologias: this.devForm.get('tecnologias')?.value,
        avatar: this.devForm.get('avatarUrl')?.value,
        github: this.devForm.get('githubUser')?.value
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }else if(data.status == "ok"){
        window.location.href = '/listarDesenvolvedores';
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao cadastrar desenvolvedor!');
      });

  }else{
    this.devForm.markAllAsTouched();
  }
}
}
