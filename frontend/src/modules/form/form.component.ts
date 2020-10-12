import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { openGithubLogin, addDev } from '../../ngrx'
import { Observable } from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit, AfterViewInit {

  public reducer$: Observable<any>;

  usersQuantity: number;

  userForm = new FormGroup({
    gitHubUser: new FormControl(''),
    avatar: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    education: new FormControl(''),
    techs: new FormControl(''),
  });

  constructor(private store: Store<{ reducer: any }>) { }

  ngOnInit(): void {
    this.reducer$ = this.store.pipe(select('reducer'))
  }

  ngAfterViewInit() {
    this.reducer$.subscribe(state => {
      this.usersQuantity = state.userList.length
      this.userForm.controls['gitHubUser'].setValue(state.gitHubUserInfos.username)
      this.userForm.controls['avatar'].setValue(state.gitHubUserInfos.avatar)
      this.userForm.controls['name'].setValue(state.gitHubUserInfos.name)
      this.userForm.controls['email'].setValue(state.gitHubUserInfos.email)
    })
  }

  openGitHubLogin() {
    this.store.dispatch(openGithubLogin({ payload: true }))
  }

  userRegister() {
    this.store.dispatch(addDev({ 
      payload: {
        id: this.usersQuantity + 1,
        avatar: this.userForm.controls['avatar'].value,
        name: this.userForm.controls['name'].value,
        city: this.userForm.controls['city'].value,
        techs: this.userForm.controls['techs'].value,
        gitHubUsername: `${this.userForm.controls['gitHubUser'].value}`
      }}))
  }
}
