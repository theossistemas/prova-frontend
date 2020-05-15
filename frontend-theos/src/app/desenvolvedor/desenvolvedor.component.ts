import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';

import { DevService } from './dev.service';

@Component({
  selector: 'app-desenvolvedor',
  templateUrl: './desenvolvedor.component.html',
  styleUrls: ['./desenvolvedor.component.css']
})
export class DesenvolvedorComponent implements OnInit {

  // Aqui damos um nome para nosso formulário
  // E ele precisa ser do tipo FormGroup
  formDev: FormGroup;
  formDevGithub: FormGroup;

  devs: Array<any>;
  devGit: any;
  dev: any;

  // Via DI, temos o Form Builder
  constructor(private fb: FormBuilder, private devService: DevService) { }

  ngOnInit(): void {
    this.listar();
    this.criarFormularioDev();
    this.criarFormularioGithub();
  }

  // Listagem dos Devs
  listar() {
    this.devService.getDevs().subscribe(dados => this.devs = dados);
  }

  // Salvando um dev com as validações
  salvar() {
    const dadosFormulario = this.formDev.value;
    console.log(dadosFormulario);

    try {
      this.devService.criarDev(dadosFormulario).subscribe(res => { this.devs.push(res) });
      alert(`Parabéns ${dadosFormulario.nome}! Cadastrado com sucesso.`);
      this.formDev.reset();
      this.formDevGithub.reset();
    } catch (error) {
      alert(error + 'Erro ao se Cadastrar');
    }
  }

  // Aqui eu faço a a busca do usuario na api do Github que está no meu service
  // e instanciando um novo FormControl para atualizar os dados dos meus inputs
  // através dos dados retornados. Utilizei a função como async await por que a minha
  // variável global (devGit) estava vindo undefined na hora que eu setava no formDev
  async buscarGitDev() {
    const user_git = this.formDevGithub.value;
    await this.devService.getGitDev(user_git).then(dadosGit => this.devGit = dadosGit);

    this.formDev = this.fb.group({
      github_username: new FormControl(this.devGit.github_username),
      avatar_url: new FormControl(this.devGit.avatar_url),
      nome: new FormControl(this.devGit.name),
      email: new FormControl(this.devGit.email),
      cidade: new FormControl(this.devGit.location),
      formacao: [''],
      techs: ['', Validators.compose([Validators.required])],
    });
  }

  // Validando botão do github, verificando se possui um usuario do github preenchindo
  criarFormularioGithub() {
    this.formDevGithub = this.fb.group({
      github_username: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  // Validando o form principal com os nomes dos campos
  criarFormularioDev() {
    this.formDev = this.fb.group({
      github_username: [''],
      avatar_url: [''],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.email],
      cidade: ['', Validators.compose([Validators.required])],
      formacao: [''],
      techs: ['', Validators.compose([Validators.required])],
    })
  }

}
