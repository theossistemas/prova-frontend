import { Router } from '@angular/router';
import { CadastroDevService } from './../../components/cadastroDev/cadastro-dev.service';
import { Dev } from './../../components/cadastroDev/dev.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-card-view',
  templateUrl: './dev-card-view.component.html',
  styleUrls: ['./dev-card-view.component.css']
})
export class DevCardViewComponent implements OnInit {
  changeText: boolean;
  devs: Dev[];
  dev: Dev = {
    nome: '',
    email: '',
    cidade: '',
    formacao: '',
    tecnologias: ''
  };

  constructor(private devService: CadastroDevService, private router: Router) {
    this.changeText = false;
   }

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.devService.read().subscribe(devs => {
      this.devs = devs
    })
  }

  readById(devId: number): void {
    this.devService.readById(devId).subscribe((dev) => {
      this.dev = dev;
    })
  }
}
