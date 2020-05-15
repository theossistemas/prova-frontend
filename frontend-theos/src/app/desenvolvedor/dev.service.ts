import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  devUrl = "http://localhost:3333/devs";

  constructor(private http: HttpClient) { }

  getDevs() {
    return this.http.get<Array<any>>(this.devUrl);
  }
}
