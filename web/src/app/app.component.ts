import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(http: HttpClient){
    console.log(http);
  }  

  cardsDevs = [
    {
    id:1,
    avatarUrl:"https://github.com/Chrcastilho.png",
    name:"Christian Castilho",
    city:"Maringá-PR",
    technologies:"TestComplete",
    linkGit:"https://github.com/Chrcastilho",
  },
  {
    id:2,
    avatarUrl:"https://github.com/GustavoHTogashi.png",
    name:"Gustavo Togashi",
    city:"Maringá-PR",
    technologies:"Angular 8, Node JS ...",
    linkGit:"https://github.com/GustavoHTogashi",
  },
  {
    id:3,
    avatarUrl:"https://media-exp1.licdn.com/dms/image/C4D03AQGMgi61yQnhDg/profile-displayphoto-shrink_200_200/0/1537188712289?e=1613606400&v=beta&t=C-60TECckTddW3m0JV1LIcyaToS0qCPzQVMCRkfzeM0",
    name:"Wander Marques",
    city:"Maringá-PR",
    technologies:"Angular 8, Node JS ...",
    linkGit:"https://github.com/WanderMarques",
  }, 
  ]
}