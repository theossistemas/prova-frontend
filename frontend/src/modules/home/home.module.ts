import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormModule } from '../form/form.module'
import { DevsModule } from '../devs/devs.module'

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, DevsModule, FormModule],
})

export class HomeModule {}
