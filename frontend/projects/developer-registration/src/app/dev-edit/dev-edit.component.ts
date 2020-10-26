import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevInfo } from '../../entities/dev-info';
import { DevService } from '../../services/dev.service';
import { GithubService } from '../../services/github.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubInfo } from '../../entities/github-info';

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

    if (this.id) {
      this.devService.put(this.id, this.dev).subscribe(
        () => {
          this.ngxSpinnerService.hide();
          this.router.navigateByUrl('/devs');
        },
        (err) => {
          this.ngxSpinnerService.hide();
          console.error(err);
        }
      );
      return;
    }

    this.devService.post(this.dev).subscribe(
      () => {
        this.ngxSpinnerService.hide();
        this.router.navigateByUrl('/devs');
      },
      (err) => {
        this.ngxSpinnerService.hide();
        console.error(err);
      }
    );
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
