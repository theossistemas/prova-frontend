import { Dev } from './dev.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CadastroDevService {
  baseUrl = "http://localhost:3001/devs";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(dev: Dev): Observable<Dev> {
    return this.http.post<Dev>(this.baseUrl, dev).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  read(): Observable<Dev[]> {
    return this.http.get<Dev[]>(this.baseUrl);
  }

  readById(id: number): Observable<Dev> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Dev>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(dev: Dev): Observable<Dev> {
    const url = `${this.baseUrl}/${dev.id}`;
    return this.http.put<Dev>(url, dev).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  delete(id: number): Observable<Dev> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Dev>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  handleError(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
