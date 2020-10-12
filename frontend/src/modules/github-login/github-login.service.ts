import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    const headers = {
      'Authorization': `Basic ${btoa(`lucas-oliveira17:96f2566bf32a84bd250f50197cee27c36eab64a1`)}`
    }

    const requestOptions = {
      headers: new HttpHeaders(headers)
    }

    const res: any = await this.http.get(`${BASE_URL}/users/${username}`, requestOptions).toPromise().catch(err => {
      console.error(err)
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
