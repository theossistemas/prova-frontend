import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/LocalStorageUtils';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    localStorageUtil = new LocalStorageUtils();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(catchError(error => {

            if (error instanceof HttpErrorResponse) {

                if (error.status === 401) {
                    this.localStorageUtil.clearLocalUserData();
                    this.router.navigate(['/account/login']);
                }
                if (error.status === 403) {
                    this.router.navigate(['navigation/access-denied']);
                }
            }

            return throwError(error);
        }));
    }
}
