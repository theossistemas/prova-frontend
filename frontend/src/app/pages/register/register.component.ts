import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  router = inject(Router)
  fb = inject(FormBuilder)
  snack = inject(MatSnackBar)
  userService = inject(UserService)
  githubService = inject(GithubService)

  registerForm = this.fb.group({
    gitHubUser: '',
    name: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    academic: ['', Validators.required],
    stacks: ['', Validators.required]
  },
    {
      validators: this.matchValidator('password', 'confirmPassword')
    }
  )

  openSnackBar(message: string) {
    this.snack.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: 'snackbar'
    })
  }

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
        return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'As senhas são diferentes.' };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
    }
  }

  login(): void {
    this.router.navigate(['login'])
  }

  async register(): Promise<void> {
    if (!this.registerForm.invalid) {
      let avatarUrl = ''
      let githubUrl = ''
      if (this.registerForm.value.gitHubUser) {
        (await this.githubService.getUserData(this.registerForm.value.gitHubUser)).subscribe((githubData) => {
          if (githubData && githubData.avatar_url) avatarUrl = githubData.avatar_url
          if (githubData && githubData.html_url) githubUrl = githubData.html_url
          this.userService.register({
            name: this.registerForm.value.name!,
            email: this.registerForm.value.email!,
            password: this.registerForm.value.password!,
            city: this.registerForm.value.city!,
            academic: this.registerForm.value.academic!,
            stacks: this.registerForm.value.stacks!,
            avatar: avatarUrl,
            github_url: githubUrl,
            role: 0
          })
            .subscribe({
              next: () => this.router.navigate(['home']),
              error: (error) => this.openSnackBar(error.error.message)
            })
        })
      } else {
        this.userService.register({
          name: this.registerForm.value.name!,
          email: this.registerForm.value.email!,
          password: this.registerForm.value.password!,
          city: this.registerForm.value.city!,
          academic: this.registerForm.value.academic!,
          stacks: this.registerForm.value.stacks!,
          avatar: avatarUrl,
          github_url: githubUrl,
          role: 0
        })
          .subscribe({
            next: () => this.router.navigate(['home']),
            error: (error) => this.openSnackBar(error.error.message)
          })
      }
    }
  }

}
