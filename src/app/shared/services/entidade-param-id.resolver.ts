import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CrudBasicoService } from './crud-basico.service';

export class EntidadeParamIdResolver<T> implements Resolve<T> {
    constructor(protected service: CrudBasicoService<T>, protected parametroIdRota: string = 'id') {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
        const id = route.params[this.parametroIdRota];
        if (id == null) {
            return of();
        }
        return this.service.buscarPorId(id);
    }
}
