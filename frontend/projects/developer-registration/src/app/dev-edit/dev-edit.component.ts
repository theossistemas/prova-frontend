import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-dev-edit',
  templateUrl: './dev-edit.component.html',
  styleUrls: ['./dev-edit.component.scss']
})
export class DevEditComponent implements OnInit {

  editDevForm: FormGroup = this.formBuilder.group({
    avatarURL: [''],
    name: [''],
    email: [''],
    city: [''],
    graduation: [''],
    techStack: [''],
  });

  nameControl: MatFormFieldControl<any>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.editDevForm.value);
  }

}
