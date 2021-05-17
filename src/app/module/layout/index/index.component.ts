import { BaseService } from './../../base/base/base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  showPassword: boolean = false;
  constructor(private fb: FormBuilder, private baseService: BaseService, private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if(this.baseService.getUser()){
      this.router.navigate(['/devs']);
    }
    this.loginForm = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    })
  }
  login(){
    if(this.loginForm.invalid)
      return;
    const user = this.baseService.getByLogin(this.loginForm.value.login, this.loginForm.value.password);
    if(user){
      this.baseService.setUser(user);
      this.router.navigate(['/devs']);
    }else{
      this._snackBar.open('Login e senha não localizados.', "Fechar");
    }
  }
}
