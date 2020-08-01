import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DevFormSearchComponent } from '../../../module/dev/component/dev-form-search/dev-form-search.component';
import { DEV_CONFIG } from '../../../module/dev/dev.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('formSearch')
  private formSearch: DevFormSearchComponent;

  constructor(private router: Router) {}

  public goHome(): void {
    this.formSearch.reset();
    this.router.navigateByUrl('/home');
  }

  public goDevs(): void {
    this.formSearch.reset();
    this.router.navigateByUrl(`${DEV_CONFIG.pathFront}/list`);
  }
}
