import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDevComponent } from './register-dev.component';

const routes: Routes = [
  { path: '', component: RegisterDevComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDevRoutingModule { }
