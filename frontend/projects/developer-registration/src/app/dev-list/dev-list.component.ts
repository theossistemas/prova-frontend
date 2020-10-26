import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DevInfo } from 'projects/developer-registration/src/entities/dev-info';
import { DevService } from 'projects/developer-registration/src/services/dev.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  devList: DevInfo[] = [];

  constructor(
    private devService: DevService,
    private ngxSpinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.ngxSpinnerService.show();
    this.devService.getAll().subscribe(
      result => {
        this.ngxSpinnerService.hide();
        this.devList.push(...result);
      },
      err => {
        this.ngxSpinnerService.hide();
        console.error(err);
      }
    );
  }

}
