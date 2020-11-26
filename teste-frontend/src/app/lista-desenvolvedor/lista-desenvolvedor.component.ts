import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-desenvolvedor',
  templateUrl: './lista-desenvolvedor.component.html',
  styleUrls: ['./lista-desenvolvedor.component.css']
})
export class ListaDesenvolvedorComponent implements OnInit {

  @Input() desenvolvedores: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
