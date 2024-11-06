import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../interfaces/user';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() cardData: User | undefined
}
