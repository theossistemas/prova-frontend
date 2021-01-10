import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserFormComponent],
  imports: [
    UsersRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class UsersModule { }
