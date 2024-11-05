import { Component, signal } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardContent } from '../../interfaces/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserCardComponent,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = signal<CardContent[]>([])

  names = [
    'Teste 1',
    'Teste 2',
    'Teste 3',
    'Teste 4',
    'Teste 5',
    'Teste 6',
    'Teste 7',
    'Teste 8',
    'Teste 9',
    'Teste 10',
    'Teste 11',
    'Teste 12',
  ]

  constructor() {
    const cards: CardContent[] = []
    this.names.forEach(name => {
      cards.push({name: name, city: name, stack: name})
    })
    this.cards.set(cards)
  }

}
