import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDevsComponent } from './list-devs.component';

const routes: Routes = [
  { path: '', component: ListDevsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDevsRoutingModule { }