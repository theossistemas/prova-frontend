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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  loginForm: FormGroup;
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
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {

    /* TODO-P: rangeLenght */
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [Validators.required, CustomValidators.rangeLength([6, 15])]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.ProcessingMessages(this.loginForm);
    });
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.accountService.login(this.user)
        .subscribe(
          success => { this.ifSuccess(success); },
          fail => { this.ifFail(fail); }
        );
    }
  }

  ifSuccess(response: any) {
    this.loginForm.reset();
    this.errors = [];

    this.accountService.LocalStorage.saveLocalUserData(response);

    let toast = this.toastr.success('Successful Login', 'Welcome Back!!!');
    /*  if (toast) {
       toast.onHidden.subscribe(() => {
         this.router.navigate(['/home']);
       });
     } */
    this.router.navigate(['/home']);
  }

  ifFail(fail: any) {
    this.errors = fail.error.errors;
    for (const error of this.errors) {
      this.toastr.error(error, 'Error :(');
    }

  }

}
