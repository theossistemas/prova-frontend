import { GITHUB_API, KEY_DEFAULT_USERS, STATES, CITIES, CLIENT_ID, CLIENT_SECRET } from './../../../base/base/const/const';
import { BaseService } from './../../../base/base/base.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  devForm: FormGroup = new FormGroup({});
  showPassword: boolean = false;

  states: any[] = STATES;
  cities: any[] = CITIES;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  user: any;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private fb: FormBuilder, private baseService: BaseService, private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.baseService.updateUser.subscribe(response => {
      this.user = response;
    });
    this.user = this.baseService.getUser();
    this.devForm = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      userGitHub: this.fb.control(''),
      name: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      cityId: this.fb.control('', [Validators.required]),
      stateId: this.fb.control('', [Validators.required]),
      avatarUrl: this.fb.control(''),
      formations: this.fb.array([
        this.fb.group({
          formation: this.fb.control('', [Validators.required])
        })
      ]),
      technologies: this.fb.array([], [Validators.required])
    });
    this.setValuesByUser(this.user);
  }

  getUserGitHub(value: string) {
    if (!value.length || this.user)
      return;
    this.baseService.get(`${GITHUB_API}users/${value}`, `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`).subscribe(response => {
      this.setValuesByGitHub(response);
    }, error => {
      console.error('Não localizado.');
    });
  }

  setValuesByGitHub(values: any) {
    const data: any = { 'login': values.login, 'name': values.name, 'email': values.email, 'avatarUrl': values.avatar_url };
    Object.entries(data).forEach(([key, value]) => {
      this.devForm.get(key)?.patchValue(value)
    });
  }

  setValuesByUser(user: any) {
    if(!this.user){
      return;
    }
    this.devForm.reset(this.user);
    user.technologies.forEach((element: any) => {
      this.addTechnologies({value: element.name}, false);
    });
    let index = 0;
    user.formations.forEach((element: any) => {
      if(index > 0){
        this.addFormations(element.formation);
      }
      index ++;
    });
  }

  save(){
    if(this.devForm.invalid){
      this._snackBar.open('Preencha todos os campos obrigatórios.', "Fechar");
      return;
    }
    if(!this.checkLogin(this.devForm.value.login)){
      return;
    }
    let index: any = null;
    if(this.user){
      index = this.baseService.getIndexByLogin(this.user.login, this.user.password);
    }
    this.baseService.save(KEY_DEFAULT_USERS, this.devForm.value, index);
    this.baseService.setUser(this.devForm.value);
    this.router.navigate(['/devs']);
  }

  checkLogin(login: string){
    if(this.user && this.user.login == login){
      return true;
    }
    const user = this.baseService.getByLogin(login);
    if(user){
      this._snackBar.open('Login já esta em uso.', "Fechar");
      return false;
    }
    return true;
  }

  get arrayFormations() {
    return this.devForm.get('formations') as FormArray;
  }

  get arrayTechnologies() {
    return this.devForm.get('technologies') as FormArray;
  }

  addFormations(value: string = '') {
    this.arrayFormations.push(this.fb.group({
      formation: this.fb.control(value, [Validators.required]),
    }));
  }

  removeFormations(index: number) {
    this.arrayFormations.removeAt(index);
  }

  getCitiesByState(): any {
    return this.cities.filter(
      city => city.stateId == this.devForm.get('stateId')?.value
    );
  }

  addTechnologies(event: any, useClear = true): void {
    const value = (event.value || '').trim();
    if (value) {
      this.arrayTechnologies.push(
        this.fb.group({
          name: this.fb.control(value),
        })
      );
    }
    // Clear the input value
    if(useClear)
      event.chipInput!.clear();
  }

  remove(index: number): void {
    this.arrayTechnologies.removeAt(index);
  }

}
