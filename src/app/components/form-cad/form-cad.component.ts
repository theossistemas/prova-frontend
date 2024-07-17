import { Component, OnInit, Inject, Optional, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CadDevService } from '../../services/cad-dev.service';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['./form-cad.component.css']
})
export class FormCadComponent implements OnInit {
  developerForm: FormGroup;
  isEditMode: boolean = false;
  @Output() developerAdded = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private cadDevService: CadDevService,
    @Optional() public dialogRef: MatDialogRef<FormCadComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.developerForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.developerForm = this.fb.group({
      githubUsername: ['', Validators.required],
      avatarUrl: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      education: ['', Validators.required],
      technologies: ['', Validators.required],
    });

    if (this.data) {
      this.isEditMode = true;
      this.developerForm.patchValue(this.data);
    }
  }

  loginWithGitHub(): void {
    const username = this.developerForm.get('githubUsername')?.value;
    if (username) {
      this.cadDevService.getUserData(username).subscribe((data: { avatar_url: any; login: any; }) => {
        this.developerForm.patchValue({
          avatarUrl: data.avatar_url,
          name: data.login
        });
      });
    }
  }

  onSubmit(): void {
    if (this.developerForm.valid) {
      if (this.isEditMode) {
        this.cadDevService.updateDeveloper(this.data.id, this.developerForm.value).subscribe(() => {
          alert('Developer atualizado com sucesso!');
          if (this.dialogRef) {
            this.dialogRef.close(true);
          }
        });
      } else {
        const githubUsername = this.developerForm.get('githubUsername')?.value;
        this.cadDevService.addDeveloper(this.developerForm.value).subscribe((newDeveloper) => {
          alert('Developer cadastrado com sucesso!');
          this.developerAdded.emit(newDeveloper);
          this.developerForm.reset();
          if (this.dialogRef) {
            this.dialogRef.close(true);
          }
        });
      }
    }
  }

  onCancel(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}


