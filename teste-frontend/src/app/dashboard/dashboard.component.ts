import { DesenvolvedorService } from './../desenvolvedor/desenvolvedor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  desenvolvedores: any[] = [];

  constructor(private desenvolvedoresService: DesenvolvedorService) { }

  ngOnInit() {
    this.desenvolvedoresService.getDesenvolvedores().subscribe(result => this.desenvolvedores = result);
  }

  addNewDesenvolvedor(value: any) {
    this.desenvolvedores.push(value);
  }

}
