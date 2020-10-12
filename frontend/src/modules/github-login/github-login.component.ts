import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { openGithubLogin, applyGitHubUserInfos } from '../../ngrx'
import { GithubLoginService } from './github-login.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.sass']
})
export class GithubLoginComponent implements OnInit, AfterViewInit {

  openGitHubLogin: boolean = false

  public openGitHubLogin$: Observable<any>;

  constructor(private store: Store<{ reducer: string }>, private gitHubLoginService: GithubLoginService) {
    this.gitHubLoginService = gitHubLoginService;
   }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.openGitHubLogin$ = this.store.pipe(select('reducer'))
  }

  ngAfterViewInit(): void {
    this.openGitHubLogin$.subscribe(state => {
      this.openGitHubLogin = state.gitHubLoginOpened
    })
  }

  async gitHubLogin() {
    try {
      const userData = await this.gitHubLoginService.login(this.loginForm.controls['username'].value)
      
      this.store.dispatch(applyGitHubUserInfos({ payload: userData }))
      this.closeGitHubLogin()
    } catch (err) {
      console.log({ err })
    }
  }

  closeGitHubLogin() {
    this.store.dispatch(openGithubLogin({ payload: false }))
  }
}
