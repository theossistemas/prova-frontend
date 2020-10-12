import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarModule } from '../navbar/navbar.module'
import { HomeModule } from '../home/home.module';
import { GithubLoginModule } from '../github-login/github-login.module';
import { EditModule } from '../edit/edit.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, NavbarModule, HomeModule, GithubLoginModule, EditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
