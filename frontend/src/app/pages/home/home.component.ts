import { Component, inject, OnInit, signal } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

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
export class HomeComponent implements OnInit {

  userService = inject(UserService)

  cards = signal<User[]>([])

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

  constructor() {}
  async ngOnInit(): Promise<void> {
    (await this.userService.getAllUsers()).subscribe({
      next: (response) => {
        const cards: User[] = []
        response.forEach((user: User) => {
          cards.push(user)
        })
        this.cards.set(cards)
      },
      error: (error) => console.log('error:', error.error.message)
    })
  }

}
