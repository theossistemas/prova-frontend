import { Component, OnInit } from '@angular/core';
import { DevInfo } from 'projects/developer-registration/src/entities/dev-info';
import { DevService } from 'projects/developer-registration/src/services/dev.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  devList: DevInfo[] = [];

  constructor(private devService: DevService) { }

  ngOnInit(): void {
    this.devService.getAll().subscribe((result) => this.devList = result);
  }

}
