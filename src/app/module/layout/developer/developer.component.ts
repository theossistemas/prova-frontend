import { KEY_DEFAULT_USERS, STATES, CITIES } from './../../base/base/const/const';
import { BaseService } from './../../base/base/base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  user: any;
  devs: any = [];
  devsFiltered: any = [];
  search: string = '';
  constructor(private baseService: BaseService, private router: Router) { }

  ngOnInit(): void {
    this.baseService.updateUser.subscribe(response => {
      this.user = response;
    });
    this.user = this.baseService.getUser();
    if(!this.user){
      this.router.navigate(['/login']);
    }
    this.devs = this.baseService.getData(KEY_DEFAULT_USERS);
    this.devsFiltered = this.devs;
  }
  getCityAndState(dev: any){
    const state = STATES.filter(state => state.id == dev.stateId)[0];
    const city = CITIES.filter(city => city.id == dev.cityId)[0];
    return `${city.name} - ${state.name}`;
  }
  getBySearch(){
    this.devsFiltered = this.devs;
    if(this.search.length > 0){
      this.devsFiltered = this.devs.filter((dev: any) => {
        return dev.technologies.filter(((techn: any) =>
        this.formatString(techn.name) == this.formatString(this.search))).length > 0
      })
    }
  }
  formatString(value: string): string{
    return value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
}
