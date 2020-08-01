import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IbgeMunicipio } from '../../../shared/model/ibge/ibge-municipio';
import { IbgeUF } from '../../../shared/model/ibge/ibge-uf';

@Injectable()
export class IbgeService {
  private readonly URI: string = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private httpClient: HttpClient) {}

  public getEstados(): Observable<Array<IbgeUF>> {
    return this.httpClient.get<Array<IbgeUF>>(`${this.URI}/estados`);
  }

  public getMunicipiosByEstado(uf: string): Observable<Array<IbgeMunicipio>> {
    return this.httpClient.get<Array<IbgeMunicipio>>(`${this.URI}/estados/${uf}/municipios`);
  }

  public getEstadoByUf(uf: string): Observable<IbgeUF> {
    return this.httpClient.get<IbgeUF>(`${this.URI}/estados/${uf}`);
  }

  public getMunicipioById(id: string): Observable<IbgeMunicipio> {
    return this.httpClient.get<IbgeMunicipio>(`${this.URI}/municipios/${id}`);
  }
}
