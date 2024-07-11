import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Desenvolvedor } from './desenvolvedor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  private readonly API = environment.api;
  private username = environment.githubUsername;
  private password = environment.githubPassword;
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
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this.http.get(`https://api.github.com/users/${github}`, { headers });
  }



}
