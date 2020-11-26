import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  constructor() { }

  public getDesenvolvedores(): Observable<any[]> {
    const desenvolvedor1 = { 
      usuarioGit:'desenv_1',
      avatar: 'https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png',
      nome:'Desenvolvedor 1',
      email:'desenv_1@gmail.com',      
      cidade:'DesenvolvCity',
      formacao: 'Eng. de Software',
      tecnologias: ['Java']
    }

    const desenvolvedor2 = { 
      usuarioGit:'desenv_2',
      avatar: 'https://veja.abril.com.br/wp-content/uploads/2017/04/avatar_750.jpg?quality=70&strip=info&w=680&h=453&crop=1',
      nome:'Desenvolvedor 2',
      email:'desenv_2@gmail.com',      
      cidade:'DesenvolvCity',
      formacao: 'Eng. de Software',
      tecnologias: ['Java', 'Angular']
    }

    return of([desenvolvedor1, desenvolvedor2]);

  }
}
