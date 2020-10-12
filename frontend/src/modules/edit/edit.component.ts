import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { openEditDev } from '../../ngrx'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})

export class EditComponent implements OnInit, AfterViewInit {

  openEditComponent: boolean = true;

  openEditComponent$: Observable<any>;

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
    this.openEditComponent$.subscribe(state => {
      this.openEditComponent = state.editDevOpened
    })
  }

  ngOnInit(): void {
    this.openEditComponent$ = this.store.pipe(select('reducer'))
  }

  closeEdit() {
    this.store.dispatch(openEditDev({ payload: false }))
  }

  editDev() {
    // tem que pegar o id do usuario que sera editado
    // atualizar as informações na lista do ngrx
    console.log(this.editForm.value)
  }
}
