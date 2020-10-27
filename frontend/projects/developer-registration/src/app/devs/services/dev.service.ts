import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevInfo } from './../models/dev-info';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevService {
  private path = environment.apiURL.concat('/devs/');

  constructor(private http: HttpClient) { }

  getAll(): Observable<DevInfo[]> {
    return this.http.get<DevInfo[]>(this.path);
  }

  getOne(id: string): Observable<DevInfo> {
    return this.http.get<DevInfo>(this.path.concat(id));
  }

  post(dev: DevInfo): Observable<DevInfo> {
    return this.http.post<DevInfo>(this.path, dev);
  }

  put(id: string, dev: DevInfo): Observable<DevInfo> {
    return this.http.put<DevInfo>(this.path.concat(id), dev);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.path.concat(id));
  }

}
