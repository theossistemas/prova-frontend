import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { applyFilter } from '../../ngrx'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(private store: Store<{ reducer: any }>) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value

    this.store.dispatch(applyFilter({ payload: filterValue }))
  }

}
