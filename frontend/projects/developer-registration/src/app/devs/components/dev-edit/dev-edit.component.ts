import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DevService } from './../../services/dev.service';
import { GithubService } from './../../services/github.service';
import { DevInfo } from './../../models/dev-info';
import { GithubInfo } from './../../models/github-info';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../store/dev-list.reducer';
import * as fromActions from './../../store/dev-list.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-dev-edit',
  templateUrl: './dev-edit.component.html',
  styleUrls: ['./dev-edit.component.scss']
})
export class DevEditComponent implements OnInit {
  id: string;
  dev: DevInfo = new DevInfo();
  editDevForm: FormGroup = this.dev.createForm(this.formBuilder);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private devService: DevService,
    private githubService: GithubService,
    private ngxSpinnerService: NgxSpinnerService,
    private toastrService: ToastrService,
    private store: Store<fromReducer.DevInfoState>
  ) { }

  ngOnInit(): void {
    this.ngxSpinnerService.show();
    this.route.params.subscribe(params => {
      const { id } = params;
      if (id) {
        this.loadDev(id);
        return;
      }
      this.ngxSpinnerService.hide();
    });
  }

  onSubmit(): void {
    this.ngxSpinnerService.show();
    this.dev = this.editDevForm.value as DevInfo;

    const createAction = fromActions.addDev({ payload: this.dev });
    const updateAction = fromActions.updateDev({
      payload: {
        id: this.id,
        changes: {
          github: this.dev.github,
          avatarURL: this.dev.avatarURL,
          name: this.dev.name,
          email: this.dev.email,
          city: this.dev.city,
          graduation: this.dev.graduation,
          techStack: this.dev.techStack,
        }
      }
    });

    this.store.dispatch(this.id ? updateAction : createAction);
  }

  private loadDev(id: string): void {
    this.devService.getOne(id).subscribe(
      dev => {
        this.ngxSpinnerService.hide();
        this.id = id;
        this.dev = dev;
        this.editDevForm.patchValue(dev);
      },
      err => {
        this.ngxSpinnerService.hide();
        this.toastrService.error('Desenvolvedor não encontrado.');
        console.error(err);
      }
    );
  }

  importDataFromGithub(): void {
    const githubUsername = this.editDevForm.controls.github.value;
    this.ngxSpinnerService.show();
    this.githubService.getInfo(githubUsername).subscribe(
      githubInfo => {
        this.ngxSpinnerService.hide();
        this.setGithubInfo(githubInfo);
      },
      err => {
        this.ngxSpinnerService.hide();
        this.toastrService.info('Perfil ' + githubUsername + ' não encontrado no GitHub.');
        console.error(err);
      }
    );
  }

  private setGithubInfo(info: GithubInfo): void {
    if (info.avatarURL) {
      this.editDevForm.get('avatarURL').setValue(info.avatarURL);
    }
    if (info.name) {
      this.editDevForm.get('name').setValue(info.name);
    }
    if (info.email) {
      this.editDevForm.get('email').setValue(info.email);
    }
    if (info.location) {
      this.editDevForm.get('city').setValue(info.location);
    }
  }
}
