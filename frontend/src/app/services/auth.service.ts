import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.API_URL}/login`, { email: email, password: password })
  }
}
