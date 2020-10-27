import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevEditComponent } from './devs/components/dev-edit/dev-edit.component';
import { DevListComponent } from './devs/components/dev-list/dev-list.component';

const routes: Routes = [
  { path: 'devs', component: DevListComponent },
  { path: 'new-dev', component: DevEditComponent },
  { path: 'edit-dev/:id', component: DevEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
