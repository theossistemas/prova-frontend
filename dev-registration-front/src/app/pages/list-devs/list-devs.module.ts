import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevsComponent } from './list-devs.component';
import { ListDevsRoutingModule } from './list-devs-routing.module';

@NgModule({
  declarations: [ListDevsComponent],
  imports: [
    CommonModule,
    ListDevsRoutingModule
  ]
})

export class ListDevsModule { }

