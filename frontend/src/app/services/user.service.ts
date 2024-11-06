import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  constructor() { }

  register(user: User): Observable<any> {
    return this.http.post(`http://localhost:8080/user`, user)
  }

  async getAllUsers(): Promise<Observable<any>> {
    return await this.http.get(`http://localhost:8080/user`)
  }
}
