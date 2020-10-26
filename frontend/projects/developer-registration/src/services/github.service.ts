import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubInfo } from '../entities/github-info';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private usersPath = environment.githubAPI.concat('/users/');

  constructor(private http: HttpClient) { }

  getInfo(username: string): Observable<GithubInfo> {
    return this.http.get<any>(this.usersPath.concat(username))
      .pipe(
        map(this.transformToGithubInfo)
      );
  }

  private transformToGithubInfo(value: any): GithubInfo {
    return GithubInfo.of(value);
  }

}
