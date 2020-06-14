import { Component, OnInit } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/LocalStorageUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent {

  token = '';
  user: any;
  email = '';
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  userLogged(): boolean {
    this.token = this.localStorageUtils.getUserToken();
    this.user = this.localStorageUtils.getUser();

    if (this.user) {
      this.email = this.user.email;
    }

    return this.token !== null;
  }

  logout() {
    this.localStorageUtils.clearLocalUserData();
    this.router.navigate(['/home']);
  }
}
