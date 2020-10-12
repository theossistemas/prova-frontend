import { NgModule } from '@angular/core';
import { DevsComponent } from './devs.component'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { reducer} from '../../ngrx'
import { StoreModule } from '@ngrx/store'


@NgModule({
  declarations: [DevsComponent],
  exports: [DevsComponent],
  imports: [MatTableModule, MatSortModule, BrowserAnimationsModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, HttpClientModule, StoreModule.forRoot({
    reducer
  })]
})
export class DevsModule { }
