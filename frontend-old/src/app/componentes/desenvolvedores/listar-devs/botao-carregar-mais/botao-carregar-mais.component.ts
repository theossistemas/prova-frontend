import { Component, Input, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css'
})
export class BotaoCarregarMaisComponent implements OnInit {

  @Input() haMaisDesenvolvedores: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
