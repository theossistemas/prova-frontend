import { Component, inject, OnInit, signal } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserCardComponent,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  userService = inject(UserService)
  router = inject(Router)
  fb = inject(FormBuilder)

  searchForm = this.fb.group({
    search: [''],
  })

  users: User[] = new Array<User>
  cards: User[] = new Array<User>

  async ngOnInit(): Promise<void> {
    (await this.userService.getAllUsers()).subscribe({
      next: (response) => {
        response.forEach((user: User) => {
          this.users.push(user)
          this.cards.push(user)
        })
      },
      error: (error) => console.log('error:', error.error.message)
    })
  }

  logout(): void {
    this.router.navigate(['login'])
  }

  filter(): void {
    this.cards = this.users.filter((search) => {
      return search.stacks.toLowerCase().includes(this.searchForm.value.search!) || search.city.toLowerCase().includes(this.searchForm.value.search!) || search.academic.toLowerCase().includes(this.searchForm.value.search!)
    })
  }
}
