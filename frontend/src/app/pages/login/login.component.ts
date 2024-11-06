import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {

  router = inject(Router)
  fb = inject(FormBuilder)
  snack = inject(MatSnackBar)
  authService = inject(AuthService)

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })

  openSnackBar(message: string) {
    this.snack.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: 'snackbar'
    })
  }

  signUp(): void {
    this.router.navigate(['register'])
  }

  login(): void {
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: () => this.router.navigate(['home']),
        error: (error) => {
          if(error.error.message) {
            this.openSnackBar(error.error.message)
            return
          }
          this.openSnackBar('Falha de conexão com o servidor.')
        }
      })
  }
  
}
