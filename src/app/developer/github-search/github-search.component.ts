import { Component, OnInit, ElementRef, ViewChildren, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { UserDataGitHub } from '../models/userDataGitHub';
import { DeveloperService } from '../services/developer.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  @Output() userDataOutput = new EventEmitter<UserDataGitHub>();

  gitHubForm: FormGroup;
  userDataGitHub: UserDataGitHub;

  constructor(private fb: FormBuilder,
    private developerService: DeveloperService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {

    this.gitHubForm = this.fb.group({
      userName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required,
      ])]
    });
  }

  ngOnInit(): void {
  }

  getGitHubUserData(): void {

    this.spinner.show();

    if (this.gitHubForm.dirty && this.gitHubForm.valid) {

      this.developerService.getGitHubUserDetailsByName(this.gitHubForm.value.userName)
        .subscribe(
          response => { this.ifSuccess(response); },
          error => { this.ifFail(error); }
        );
    }

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  ifSuccess(response: any) {
    this.userDataGitHub = response;
    this.userDataOutput.emit(this.userDataGitHub);

    console.log(this.userDataGitHub);
    this.toastr.success('Dados recebido do GitHub', this.gitHubForm.value.userName);
  }

  ifFail(fail: any) {
    this.toastr.error(this.gitHubForm.value.userName + ': ' + fail.error.message, fail.name);
    console.log('Error response::');
    console.log(fail);
  }
}



