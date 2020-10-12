import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { reducer } from '../../ngrx'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule, StoreModule.forRoot({
      reducer
    })
  ]
})
export class NavbarModule { }
