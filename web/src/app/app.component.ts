import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  
  //constructor(private fb: FormBuilder){}

  //devForm: FormGroup;

  // constructor(formBuilder: FormBuilder) { 
  //   this.form = formBuilder.group({
  //     id: null,
  //     gitHubURL: null,
  //     avatarURL: null,
  //     nome: null,
  //     email: null,
  //     cidade: null,
  //     formacao: null,
  //     tecnologias: null,
  //   })
  // }
}
