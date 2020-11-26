import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-desenvolvedor',
  templateUrl: './cadastro-desenvolvedor.component.html',
  styleUrls: ['./cadastro-desenvolvedor.component.css']
})
export class CadastroDesenvolvedorComponent implements OnInit {

  @Output()
  addNew: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  tecList = ['Angular', 'React', 'Java', 'PHP', 'C#', 'Vue', 'Flutter'];
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }
 
  createForm(): FormGroup {

    const form = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      usuarioGit: ['', Validators.required],
      avatar: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cidade: ['', Validators.required],
      formacao: ['', Validators.required],
      tecnologias: ['', Validators.required]
    });
 
    return form;

  }

  onSave() {
    this.addNew.emit(this.form.value);
  }

}
