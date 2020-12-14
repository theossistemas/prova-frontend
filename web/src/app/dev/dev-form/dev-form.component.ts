import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dev-form',
  templateUrl: './dev-form.component.html',
  styleUrls: ['./dev-form.component.scss']
})
export class DevFormComponent implements OnInit {
  devForm: FormGroup;

  githubAuthHTML: any;

  @ViewChild('dialog') dialog: ElementRef<any>;

  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _sanitizer: DomSanitizer
  ) {}

  @Input () githubUser= '';
  @Input () avatarUrl= '';
  @Input () nome= '';
  @Input () email= '';
  @Input () cidade= '';
  @Input () formacao= '';
  @Input () tecnologias= '';

  ngOnInit(): void {
    this.devForm = this._fb.group({
      githubUser: '',
      avatarUrl: '',
      nome: '',
      email: '',
      cidade: '',
      formacao: '',
      tecnologias: '',
    });
  }

  handleGithubRegister() {
    this._http
      .get(
        'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/authorize',
        { headers: { accept: 'text/html' }, responseType: 'text' }
      )
      .subscribe((res: string) => {
		  //console.log(res)
		this.githubAuthHTML = this._sanitizer.bypassSecurityTrustHtml(res);
		this.dialog.nativeElement.style.display = 'flex';
		document.body.style.overflow = 'hidden'
      });
  }

  handleDevFormRegister() {
    console.log("Teste")
  }
}