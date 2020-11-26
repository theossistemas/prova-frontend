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
      avatar: 'https://freepngimg.com/thumb/league_of_legends/85655-league-legends-discord-of-face-facial-expression-thumb.png',
      nome:'Desenvolvedor 1',
      email:'desenv_1@gmail.com',      
      cidade:'DesenvolvCity',
      formacao: 'Eng. de Software',
      tecnologias: ['Java']
    }

    const desenvolvedor2 = { 
      usuarioGit:'desenv_2',
      avatar: 'https://www.pngitem.com/pimgs/m/108-1083736_transparent-discord-icon-png-discord-profile-png-download.png',
      nome:'Desenvolvedor 2',
      email:'desenv_2@gmail.com',      
      cidade:'DesenvolvCity',
      formacao: 'Eng. de Software',
      tecnologias: ['Java', 'Angular']
    }

    return of([desenvolvedor1, desenvolvedor2]);

  }
}
