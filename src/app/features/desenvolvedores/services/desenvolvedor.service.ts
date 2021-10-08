import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Desenvolvedor } from '../models/desenvolvedor';
import { API } from '../../../api.constants';
import { CrudBasicoService, mapRespostaBackend } from '../../../shared/services/crud-basico.service';

@Injectable({
    providedIn: 'root',
})
export class DesenvolvedorService extends CrudBasicoService<Desenvolvedor> {
    constructor(protected http: HttpClient) {
        super(http, API.ENDPOINT_DESENVOLVEDOR);
    }

    buscarTodosComFiltro(filtro: string): Observable<Desenvolvedor[]> {
        const respostaFormacao = this.http.get<Desenvolvedor[]>(`${API.ENDPOINT_DESENVOLVEDOR}?formacao_like=${filtro}`, {observe: 'response'})
            .pipe(mapRespostaBackend());
        const respostaNome = this.http.get<Desenvolvedor[]>(`${API.ENDPOINT_DESENVOLVEDOR}?nome_like=${filtro}`, {observe: 'response'})
            .pipe(mapRespostaBackend())
        const respostaTecnologia = this.http.get<Desenvolvedor[]>(`${API.ENDPOINT_DESENVOLVEDOR}?tecnologia_like=${filtro}`, {observe: 'response'})
            .pipe(mapRespostaBackend())

        return forkJoin([respostaFormacao, respostaNome, respostaTecnologia]);
    }

    buscarDadosDoGithub(usuario: string): Observable<any> {
        const API_GITHUB = 'https://api.github.com/users'
        return this.http.get(`${API_GITHUB}/${usuario}`).pipe(take(1));
    }
}
