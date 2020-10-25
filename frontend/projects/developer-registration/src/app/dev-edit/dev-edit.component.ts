import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { DevInfo } from '../../entities/dev-info';
import { DevService } from '../../services/dev.service';

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
    private devService: DevService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.devService.getOne(id).subscribe(
        dev => {
          this.id = id;
          this.dev = dev;
          this.editDevForm.patchValue(dev);
        },
        err => console.error(err)
      );
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
    }
  }

}
