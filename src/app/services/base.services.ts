import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageUtils } from '../utils/LocalStorageUtils';
import { throwError } from 'rxjs';


export abstract class BaseService {

    protected UrlServiceV1: string = environment.apiUrlv1;
    protected UrlServiceGitHubApi: string = environment.apiUrlGitHub;
    protected URLServiceNodeBackend: string = environment.apiUrlNodeBackend;

    public LocalStorage = new LocalStorageUtils();

    protected getHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected getAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.LocalStorage.getUserToken()}`
            })
        };
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === 'Unknown Error') {
                customError.push('Unknown Error');
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}
