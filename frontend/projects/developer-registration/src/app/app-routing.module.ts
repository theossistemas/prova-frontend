import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevEditComponent } from './dev-edit/dev-edit.component';
import { DevListComponent } from './dev-list/dev-list.component';

const routes: Routes = [
  { path: 'devs', component: DevListComponent },
  { path: 'new', component: DevEditComponent },
  { path: 'edit', component: DevEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
