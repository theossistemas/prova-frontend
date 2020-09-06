import { Desenvolvedor } from './desenvolvedor.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {
  
  baseUrl = "http://localhost:8081/"
  pathDesenvolvedor = 'desenvolvedor'
  pathDesenvolvedores = 'desenvolvedores'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 300,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  create(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor> {
    return this.http.post<Desenvolvedor>(this.baseUrl + this.pathDesenvolvedor, desenvolvedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any) {
    this.showMessage('Ocorreu um erro')
    return EMPTY;
  }

  read(): Observable<Desenvolvedor[]> {
    return this.http.get<Desenvolvedor[]>(this.baseUrl + this.pathDesenvolvedores)
  }

  delete(id: string): Observable<Desenvolvedor> {
    return this.http.delete<Desenvolvedor>(this.baseUrl + this.pathDesenvolvedor + `/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
