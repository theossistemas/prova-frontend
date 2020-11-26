import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-desenvolvedor',
  templateUrl: './lista-desenvolvedor.component.html',
  styleUrls: ['./lista-desenvolvedor.component.css']
})
export class ListaDesenvolvedorComponent{

  @Input() desenvolvedores: any[] = [];

}
