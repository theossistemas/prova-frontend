import { Component, OnInit } from '@angular/core';

import { DevService } from './../../../services/dev.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.styl']
})
export class UserFormComponent implements OnInit {

  devForm: FormGroup
  loading = false

  constructor(
    private devService: DevService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.devForm = new FormGroup({
      login: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      avatar_url: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      techs: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  }

  addDev() {
    if (this.devForm.invalid) return
    const body = this.devForm.value
    this.devService.addDev(body)
      .subscribe(dev => {
        console.log('Devs: ', dev);
        this.devForm.reset()
        Swal.fire({
          title: `Sucesso`,
          text: `Dev ${dev.name} cadastrado(a) com sucesso!`,
          icon: 'success'
        })
      }, error => {
        Swal.fire({
          title: `Oops`,
          text: error?.error?.message,
          icon: 'error'
        })
      })
  }

  searchFromGitHub() {
    if (this.devForm?.value?.login?.lenght < 2) return
    const login = this.devForm.value.login
    this.loading = true
    this.devService.searchFromGitHub(login)
      .subscribe(dev => {
        delete dev.login
        this.devForm.patchValue(dev)
        console.log('Dev from Git: ', dev);
        this.loading = false
      }, error => {
        console.log(error);
        this.loading = false
      })
  }

}
