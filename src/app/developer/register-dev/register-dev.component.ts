import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Developer } from '../models/developer';
import { ToastrService } from 'ngx-toastr';
import { DeveloperService } from '../services/developer.service';
import { UserDataGitHub } from '../models/userDataGitHub';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dev',
  templateUrl: './register-dev.component.html',
  styleUrls: ['./register-dev.component.css'],
})
export class RegisterDevComponent implements OnInit {

  public developerForm: FormGroup;
  userDataGitHub: UserDataGitHub;
  developer: Developer = new Developer();

  constructor(private fb1: FormBuilder,
    private developerService: DeveloperService,
    private toastrr: ToastrService,
    private router: Router) {

    this.developerForm = this.fb1.group({
      avatar: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
      email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
      city: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
      formacao: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
      technologies: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])],
    });
  }

  ngOnInit(): void {
  }

  userDataReceive($event) {
    this.userDataGitHub = $event;
    this.fillGitForm();
  }

  fillGitForm() {
    this.developerForm.patchValue({
      name: this.userDataGitHub.name,
      avatar: this.userDataGitHub.avatar_url,
      city: this.userDataGitHub.location,
    });
  }

  addDeveloper() {
    if (this.developerForm.dirty && this.developerForm.valid) {

      this.developer = Object.assign({}, this.developer, this.developerForm.value);
      console.log('this.developer:::::::::::::::::::::::::');
      console.log(this.developer);
      this.developerService.newDeveloper(this.developer)
        .subscribe(
          success => {
            this.toastrr.success('Developer registrado com Sucesso!', '');
            this.router.navigateByUrl('/developer/register-dev', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/developer/home']);
            });
          },
          fail => { this.toastrr.error('Erro ao cadastrar Developer', fail.error); }
        );
    }
  }

}
