import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IDev } from './../Interfaces/Devs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private urlBase = environment.urlBase
  private urlGitHub = environment.urlGitHub
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDevs(): Observable<IDev[]> {
    const url = `${this.urlBase}/devs/`
    return this.http.get<IDev[]>(url, this.httpOptions)
  }

  getDev(_id: any): Observable<IDev> {
    const url = `${this.urlBase}/dev/${_id}`;
    return this.http.get<IDev>(url)
  }

  updateDev(body: IDev, _id: number): Observable<IDev> {
    const url = `${this.urlBase}/devs/${_id}`;
    return this.http.put<IDev>(url, body, this.httpOptions)
  }

  addDev(dev: IDev): Observable<IDev> {
    const url = `${this.urlBase}/devs/`
    return this.http.post<IDev>(url, dev, this.httpOptions)
  }

  deleteDev(_id: string): Observable<IDev> {
    const url = `${this.urlBase}/devs/${_id}`;
    return this.http.delete<IDev>(url, this.httpOptions)
  }

  searchDev(keyword: string): Observable<IDev[]> {
    const url = `${this.urlBase}/devs/${keyword}`;
    return this.http.get<IDev[]>(url, this.httpOptions)
  }

  searchFromGitHub(login: string): Observable<IDev> {
    const url = `${this.urlGitHub}/users/${login}`;
    return this.http.get<IDev>(url, this.httpOptions)
  }

}
