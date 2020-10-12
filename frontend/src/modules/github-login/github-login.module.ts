import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { GithubLoginComponent } from './github-login.component'
import { reducer } from '../../ngrx'
import { GithubLoginService } from './github-login.service';

@NgModule({
  declarations: [GithubLoginComponent],
  exports: [GithubLoginComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, HttpClientModule, ReactiveFormsModule, StoreModule.forRoot({
    reducer
  })],
  providers: [GithubLoginService]
})

export class GithubLoginModule {}