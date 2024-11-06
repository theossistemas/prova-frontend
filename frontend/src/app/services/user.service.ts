import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  constructor() { }

  register(user: User): Observable<any> {
    return this.http.post(`${environment.API_URL}/user`, user)
  }

  async getAllUsers(): Promise<Observable<any>> {
    return await this.http.get(`${environment.API_URL}/user`)
  }
}
