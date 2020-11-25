import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    
    const form = new FormGroup({
      usuarioGit: new FormControl(),
      avatar: new FormControl(),
      nome: new FormControl(),
      email: new FormControl(),      
      cidade: new FormControl(),
      formacao: new FormControl(),
      tecnologias: new FormControl()
    });

    return form;
  }
  
}
