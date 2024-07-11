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

  listar(pagina: number, filtro?: string): Observable<any[]>{
    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("page", pagina.toString())
    .set("limit", itensPorPagina.toString());
    if (filtro && filtro.trim() !== '') {
      params = params.set('filtro', filtro);
    }

    return this.http.get<Desenvolvedor[]>(this.API+"/all/devs", { params });
  }

  criar(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
    return this.http.post<Desenvolvedor>(this.API+"/new/dev", desenvolvedor);
  }

  editar(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
    return this.http.put<Desenvolvedor>(`${this.API}/update/dev/${desenvolvedor._id}`, desenvolvedor);
  }

  excluir(id: string): Observable<Desenvolvedor>{
    return this.http.delete<Desenvolvedor>(`${this.API}/delete/dev/${id}`);
  }

  buscarPorId(id: string): Observable<Desenvolvedor>{
    return this.http.get<Desenvolvedor>(`${this.API}/dev/${id}`);
  }

  buscarFotoGithub(github: string): Observable<any>{
    return this.http.get(`https://api.github.com/users/${github}`);
  }



}
