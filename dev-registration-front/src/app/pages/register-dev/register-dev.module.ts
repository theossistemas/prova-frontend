import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterDevComponent } from './register-dev.component';
import { RegisterDevRoutingModule } from './register-dev-routing.module';

@NgModule({
  declarations: [RegisterDevComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RegisterDevRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterDevModule { }
