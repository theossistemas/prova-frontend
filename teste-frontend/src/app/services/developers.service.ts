import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Developers } from '../models/developers.model';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) { }

  public getDevelopers(): Observable<any> {
    return this.http.get('https://api.github.com/users');
  }

}
