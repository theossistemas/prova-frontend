import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  http = inject(HttpClient)

  constructor() { }

  async getUserData(username: string): Promise<Observable<any>> {
    return await this.http.get(`${environment.GITHUB_URL}/${username}`,)
  }
}
