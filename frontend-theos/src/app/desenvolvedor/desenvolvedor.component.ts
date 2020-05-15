import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';

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

  devs: Array<any>;

  // Via DI, nós temos o Form Builder
  constructor(private fb: FormBuilder, private devService: DevService) { }

  ngOnInit(): void {
    this.listar();
    this.criarFormularioDev();
  }

  listar() {
    this.devService.getDevs().subscribe(dados => this.devs = dados);
  }

  enviarDados() {
    console.log(this.formDev.value);
  }

  criarFormularioDev() {
    this.formDev = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      techs: ['', Validators.compose([Validators.required])],
    })
  }

}
