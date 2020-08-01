import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevEditPageComponent } from './page/dev-edit-page/dev-edit-page.component';
import { DevListPageComponent } from './page/dev-list-page/dev-list-page.component';
import { DevRegisterPageComponent } from './page/dev-register-page/dev-register-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new',
        component: DevRegisterPageComponent
      },
      {
        path: 'list',
        component: DevListPageComponent
      },
      {
        path: 'edit/:id',
        component: DevEditPageComponent
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DevRoutingModule {}
