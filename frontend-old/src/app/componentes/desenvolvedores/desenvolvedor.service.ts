import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Desenvolvedor } from './desenvolvedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  private readonly API = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<Desenvolvedor[]>{
    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("page", pagina.toString())
    .set("limit", itensPorPagina.toString());

    return this.http.get<Desenvolvedor[]>(this.API, { params });
  }

  criar(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
    return this.http.post<Desenvolvedor>(this.API, desenvolvedor);
  }

  editar(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
    return this.http.put<Desenvolvedor>(`${this.API}/${desenvolvedor.id}`, desenvolvedor);
  }

  excluir(id: string): Observable<Desenvolvedor>{
    return this.http.delete<Desenvolvedor>(`${this.API}/${id}`);
  }

  buscarPorId(id: string): Observable<Desenvolvedor>{
    return this.http.get<Desenvolvedor>(`${this.API}/${id}`);
  }


}
