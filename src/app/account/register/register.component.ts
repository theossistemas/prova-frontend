import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/utils/generic-form-validation';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable, fromEvent, merge } from 'rxjs';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  registerForm: FormGroup;
  user: User;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  changesNotSaved: boolean;

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) {
    this.validationMessages = {
      email: {
        required: 'Enter the e-mail',
        email: 'Invalid E-mail'
      },
      password: {
        required: 'Password is required',
        rangeLength: 'Password must be between 6 and 15 characters'
      },
      passwordConfirm: {
        required: 'Enter the password again',
        rangeLength: 'Password must be between 6 and 15 characters',
        equalTo: 'Passwords do not match'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {

    /* TODO-P: rangeLenght */
    let password1 = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let passwordConfirm1 = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password1)]);

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: password1,
      passwordConfirm: passwordConfirm1
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.ProcessingMessages(this.registerForm);
      this.changesNotSaved = true;
    });
  }

  addAccount() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);

      this.accountService.registerUser(this.user)
        .subscribe(
          success => { this.ifSuccess(success); },
          fail => { this.ifFail(fail); }
        );

      this.changesNotSaved = false;
    }
  }

  ifSuccess(response: any) {
    this.registerForm.reset();
    this.errors = [];

    this.accountService.LocalStorage.saveLocalUserData(response);

    let toast = this.toastr.success('User has registered', 'Welcome!!!');
    this.router.navigate(['/home']);
    /* if (toast) {
      toast.onHidden.subscribe(() => {
      });
    } */
  }

  ifFail(fail: any) {
    this.errors = fail.error.errors;

    /*  for (let error of this.errors) {
       //console.log(error);
       this.toastr.error(error, 'Error:');
     } */

    for (let error of Object.keys(this.errors)) {
      console.log(this.errors[error]);
      this.toastr.warning(this.errors[error], 'Error:');
    }

  }

}

