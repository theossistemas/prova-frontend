import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadDevService {
  private apiUrl = 'http://localhost:3000/developers';
  private githubApiUrl = 'https://api.github.com/users';
  private developerAddedSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getDevelopers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addDeveloper(developer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, developer).pipe(
      tap((newDeveloper) => {
        this.developerAddedSubject.next(newDeveloper);
      })
    );
  }

  updateDeveloper(id: number, developer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, developer);
  }

  deleteDeveloper(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getUserData(username: string): Observable<any> {
    return this.http.get<any>(`${this.githubApiUrl}/${username}`);
  }

  get developerAdded$(): Observable<any> {
    return this.developerAddedSubject.asObservable();
  }
}
