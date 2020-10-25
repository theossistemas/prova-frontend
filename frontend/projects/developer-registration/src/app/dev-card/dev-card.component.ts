import { Component, Input, OnInit } from '@angular/core';
import { DevInfo } from 'projects/developer-registration/dev-info';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  @Input() dev: DevInfo;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dev.name);
  }

}
