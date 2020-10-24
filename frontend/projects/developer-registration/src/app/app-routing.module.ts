import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevListComponent } from './dev-list/dev-list.component';

const routes: Routes = [
  { path: 'devs', component: DevListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
