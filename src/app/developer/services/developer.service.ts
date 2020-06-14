import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Developer } from '../models/developer';
import { UserDataGitHub } from '../models/userDataGitHub';


@Injectable()
export class DeveloperService extends BaseService {

    developer: Developer = new Developer();

    constructor(private http: HttpClient) {
        super();
    }

    getGitHubUserDetailsByName(name: string): Observable<UserDataGitHub> {
        return this.http
            .get<UserDataGitHub>(this.UrlServiceGitHubApi + 'users/' + name, super.getHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    newDeveloper(developer: Developer): Observable<Developer> {
        return this.http
            .post(this.URLServiceNodeBackend + 'developer/add/', developer, this.getHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    getById(id: string): Observable<Developer> {
        return this.http
            .get<Developer>(this.URLServiceNodeBackend + 'developer/id/' + id, super.getHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    getList(): Observable<Developer[]> {
        return this.http
            .get<Developer[]>(this.URLServiceNodeBackend + 'developer/list', super.getHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    delete(id: string): Observable<Developer> {
        return this.http
            .delete(this.URLServiceNodeBackend + 'developer/delete/' + name, super.getHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }
}
