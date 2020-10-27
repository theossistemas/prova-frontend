import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DevInfo } from './../../models/dev-info';
import { environment } from './../../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../store/dev-list.reducer';
import * as fromAction from './../../store/dev-list.actions';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  @Input() dev: DevInfo;

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private toastrService: ToastrService,
    private store: Store<fromReducer.DevInfoState>,
  ) { }

  ngOnInit(): void {
  }

  editDev(): void {
    this.router.navigate(['/edit-dev/' + this.dev.id]);
  }

  deleteDev(): void {
    this.ngxSpinnerService.show();
    this.store.dispatch(fromAction.deleteDev({ id: this.dev.id }));
  }

  defaultAvatarURL(): string {
    return  '../../assets/default-avatar.png';
  }

  githubLocation(dev: DevInfo): string {
    let githubURL = environment.githubURL;

    if (!githubURL || githubURL.trim().length === 0) {
      this.toastrService.error('Falha ao construir URL do GitHub do Usuário.');
      throw new Error('GitHub Env not configured');
    }

    if (!githubURL.endsWith('/')) {
      githubURL += '/';
    }

    return githubURL.concat(dev.github);
  }
}
