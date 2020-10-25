import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevInfo } from './../entities/dev-info';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<DevInfo[]> {
    return this.http.get<DevInfo[]>(environment.apiURL + '/devs');
  }

}
