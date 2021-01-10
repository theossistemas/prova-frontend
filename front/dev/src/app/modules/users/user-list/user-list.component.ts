import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DevService } from './../../../services/dev.service';
import { IDev } from './../../../Interfaces/Devs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.styl']
})
export class UserListComponent implements OnInit {

  devs: IDev[] = []
  query: FormControl = new FormControl('')
  loading = false

  constructor(private devService: DevService) { }

  ngOnInit(): void {
    this.getDevs()
  }

  getDevs() {
    this.devService.getDevs()
      .subscribe(devs => {
        this.devs = devs
        console.log('Devs: ', this.devs);

      }, error => {
        console.log(error);

      })
  }

  getdeleteDevDevs(dev: IDev, index) {

    Swal.fire({
      title: `Remove DEV`,
      text: `Deseja realmente remover, ${dev.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover'
    }).then((result) => {
      if (result.isConfirmed) {
        this.devService.deleteDev(dev._id)
          .subscribe(dev => {
            this.devs.splice(index, 1)
            console.log('Devs: ', this.devs);
          }, error => {
            Swal.fire({
              title: `Oops`,
              text: error?.error?.message,
              icon: 'error'
            })
          })
      }
    })
  }

  searchDev() {
    if (!this.query?.value) this.getDevs()
    this.loading = true
    this.devService.searchDev(this.query.value)
      .subscribe(devs => {
        this.devs = devs
        this.loading = false
      }, error => {
        console.log(error);
        this.loading = false
      })
  }

}
