import { EditComponent } from './edit.component'
import { reducer } from '../../ngrx'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [EditComponent],
  exports: [EditComponent],
  imports: [
    CommonModule, CommonModule, MatDialogModule, FormsModule, HttpClientModule, ReactiveFormsModule, StoreModule.forRoot({
      reducer
    })
  ]
})
export class EditModule { }
