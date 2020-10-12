import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

const BASE_URL = `https://api.github.com`

interface UserReturn {
  username: string,
  avatar: string,
  email: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class GithubLoginService {

  constructor(private http: HttpClient) { }

  async login(username: string) {

    const PERSONAL_ACCESS_TOKEN = atob(environment.gitHubToken)

    const headers = {
      'Authorization': `Basic ${btoa(`lucas-oliveira17:${PERSONAL_ACCESS_TOKEN}`)}`
    }

    const requestOptions = {
      headers: new HttpHeaders(headers)
    }

    const res: any = await this.http.get(`${BASE_URL}/users/${username}`, requestOptions).toPromise().catch(err => {
      throw err;
    })

    const userReturn: UserReturn = {
      username: res.login,
      avatar: res.avatar_url,
      email: res.email,
      name: res.name
    }

    return userReturn
  }
}
