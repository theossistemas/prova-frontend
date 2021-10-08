import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class CrudBasicoService<T> {
    constructor(protected http: HttpClient, protected RESOURCE_URL) {
    }

    salvar(registro: any): Observable<any> {
        return registro.id ? this.atualizarPorId(registro) : this.criar(registro);
    }

    private criar(registro: T): Observable<T> {
        return this.http.post<T>(this.RESOURCE_URL, registro, {observe: 'response'})
            .pipe(
                mapRespostaBackend()
            );
    }

    private atualizarPorId(registo: T | any): Observable<T> {
        return this.http.put<T>(`${this.RESOURCE_URL}/${registo.id}`, registo, {observe: 'response'})
            .pipe(
                mapRespostaBackend()
            );
    }

    buscarPorId(id: number | string): Observable<T> {
        return this.http.get<T>(`${this.RESOURCE_URL}/${id}`, {observe: 'response'})
            .pipe(
                mapRespostaBackend()
            );
    }

    buscarTodos(): Observable<T[]> {
        return this.http.get<T[]>(this.RESOURCE_URL, {observe: 'response'})
            .pipe(
                mapRespostaBackend()
            );
    }

    deletar(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.RESOURCE_URL}/${id}`, {observe: 'response'});
    }
}

export function mapRespostaBackend<T>() {
    return pipe(
        filter((resposta: HttpResponse<T>) => resposta.ok),
        map((resposta: HttpResponse<T>) => resposta.body),
        map((bodyResposta: any) => {
            return bodyResposta?.data ?? bodyResposta;
        })
    );
}
