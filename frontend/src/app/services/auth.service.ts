import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:8080/login`, { email: email, password: password })
  }
}
