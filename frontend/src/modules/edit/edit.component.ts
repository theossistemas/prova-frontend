import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { openEditDev, editDev } from '../../ngrx'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})

export class EditComponent implements OnInit, AfterViewInit {

  openEditComponent: boolean = true;

  devToEdit: any;

  reducer$: Observable<any>;

  constructor(private store: Store<{ reducer: string }>) { }

  editForm = new FormGroup({
    gitHubUser: new FormControl(''),
    avatar: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    education: new FormControl(''),
    techs: new FormControl(''),
  });


  ngAfterViewInit() {
    this.reducer$.subscribe(state => {
      this.devToEdit = state.devToEdit
      this.openEditComponent = state.editDevOpened
    })
  }

  ngOnInit(): void {
    this.reducer$ = this.store.pipe(select('reducer'))
  }

  closeEdit() {
    this.store.dispatch(openEditDev({ payload: false }))
  }

  editDev() {
    this.store.dispatch(editDev({ payload: {
      id: this.devToEdit,
      updatedUser: this.editForm.value
    }}))
    
    this.closeEdit()
  }
}
