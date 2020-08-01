import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUser } from '../../../shared/model/git-hub/git-hub-user';

@Injectable()
export class GitHubService {
  private readonly URI: string = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  public getUserByLogin(login: string): Observable<GitHubUser> {
    return this.httpClient.get<GitHubUser>(`${this.URI}/users/${login}`);
  }
}
