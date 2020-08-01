import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DEV_CONFIG } from '../../dev.config';

@Component({
  selector: 'app-dev-btn-link-add-dev',
  templateUrl: './dev-btn-link-add-dev.component.html',
  styleUrls: ['./dev-btn-link-add-dev.component.scss']
})
export class DevBtnLinkAddDevComponent implements OnInit {
  public faUserPlus: IconDefinition = faUserPlus;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goAddDev(): void {
    this.router.navigateByUrl(`${DEV_CONFIG.pathFront}/new`);
  }
}
