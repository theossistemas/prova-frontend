import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevInfo } from './dev-info';
import { environment } from './src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<DevInfo[]> {
    return this.http.get<DevInfo[]>(environment.apiURL + '/devs');
  }

}
