import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  devUrl = "http://localhost:3333/devs";
  devGitUrl = "http://localhost:3333/devgithub";

  constructor(private http: HttpClient) { }

  getDevs() {
    return this.http.get<Array<any>>(this.devUrl);
  }

  getGitDev(gitDev: any): Promise<any> {
    return this.http.post<any>(this.devGitUrl, gitDev).toPromise();
  }

  criarDev(dev: any) {
    return this.http.post(this.devUrl, dev);
  }
}
