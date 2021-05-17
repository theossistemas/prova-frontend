import { KEY_DEFAULT_USERS } from './const/const';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  data: any = {};
  user: any = null;
  @Output() updateUser = new EventEmitter();
  constructor(private httpClient: HttpClient) {

  }

  get(route: string, queryParameters: string = ''): Observable<any> {
    return this.httpClient.get(`${route}${queryParameters}`);
  }
  post(route: string, data: any, queryParameters: string = ''): Observable<any> {
    return this.httpClient.get(`${route}${queryParameters}`);
  }
  put(route: string, data: any, queryParameters: string = ''): Observable<any> {
    return this.httpClient.put(`${route}${queryParameters}`, data);
  }
  delete(route: string, queryParameters: string = ''): Observable<any> {
    return this.httpClient.delete(`${route}${queryParameters}`);
  }


  save(key: string, data: any, index?: string) {
    this.data = this.getData(key, true)
    if (!this.data[key]?.length) {
      this.data = { ...this.data, ...{ [key]: [] } }
    }
    if (index) {
      this.data[key][index] = data;
    } else {
      this.data[key].push(data);
    }
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  getData(key: string, isFull: boolean = false) {
    if (!this.data[key]?.length) {
      const data = localStorage.getItem('data');
      return (data ? (isFull ? JSON.parse(data) : JSON.parse(data)[key]) : (isFull ? this.data : this.data[key]));
    }
    return (isFull ? this.data : this.data[key]);
  }

  getByLogin(login: string, password?: string) {
    const data = this.getData(KEY_DEFAULT_USERS);
    if(!data){
      return null;
    }
    const user = data.filter((user: { login: string, password: string}) =>
    (user.login === login && (user.password === password || !password)));
     return (user.length ? user[0] : null);
  }

  deleteData(key: string, index: number) {

  }

  setUser(user: any) {
    this.user = user;
    this.updateUser.emit(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getUser() {
    const user = localStorage.getItem('user');
    return (user ? JSON.parse(user) : this.user);
  }

  getIndexByLogin(login: string, password: string): string {
    const data = this.getData(KEY_DEFAULT_USERS);
    let index = 0;
    let indexByLogin = null;
    data.forEach((element: any) => {
      if(element.login === login && element.password === password){
        indexByLogin = index;
      }
      index++;
    });
    return indexByLogin + '';
  }

}
