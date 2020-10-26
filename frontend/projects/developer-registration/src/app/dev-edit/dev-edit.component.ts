import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { DevInfo } from '../../entities/dev-info';
import { DevService } from '../../services/dev.service';
import { GithubService } from '../../services/github.service';

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
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      if (id) {
        this.loadDev(id);
      }
    });
  }

  onSubmit(): void {
    console.log('onSubmit(', this.id, ')');
    this.dev = this.editDevForm.value as DevInfo;

    if (this.id) {
      this.devService.put(this.id, this.dev).subscribe(
        () => this.router.navigateByUrl('/devs'),
        (err) => console.error(err)
      );
      return;
    }

    this.devService.post(this.dev).subscribe(
      () => this.router.navigateByUrl('/devs'),
      (err) => console.error(err)
    );
  }

  private loadDev(id: string): void {
    this.devService.getOne(id).subscribe(
      dev => {
        this.id = id;
        this.dev = dev;
        this.editDevForm.patchValue(dev);
      },
      err => console.error(err)
    );
  }

  importDataFromGithub(): void {
    const githubUsername = this.editDevForm.controls.github.value;
    this.githubService.getInfo(githubUsername).subscribe(
      githubInfo => {
        this.editDevForm.get('avatarURL').setValue(githubInfo.avatarURL);
        this.editDevForm.get('name').setValue(githubInfo.name);
        this.editDevForm.get('email').setValue(githubInfo.email);
        this.editDevForm.get('city').setValue(githubInfo.location);
      },
      err => console.error(err)
    );
  }

}
