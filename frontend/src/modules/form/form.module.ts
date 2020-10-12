import { NgModule } from '@angular/core';
import { FormComponent } from './form.component'
import { reducer } from '../../ngrx'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({
    reducer
  })]
})
export class FormModule { }
