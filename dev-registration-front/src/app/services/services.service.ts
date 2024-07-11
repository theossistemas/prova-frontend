import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Devs } from '../pages/list-devs/list-devs.component';
import { ShowNotificationComponent } from '../components/show-notification/show-notification.component';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient, private showNotification : ShowNotificationComponent) { }

  addDev(dev: Devs): Observable<any> {
    return this.http.post('http://localhost:3000/devs', dev).pipe(
      map((response) => response),
      catchError(async (error) => this.erroHandler(error))
    );
  }

  getDevs(): Observable<any> {
    return this.http.get('http://localhost:3000/devs').pipe(
      map((response) => response),
      catchError(async (error) => this.erroHandler(error))
    );
  }
  
  erroHandler(error: any): any {
    this.showNotification.showNotification({ icon: 'error', title: 'Operation error!' });
  }
}
