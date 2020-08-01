import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TitleService } from '../../core/service/title/title.service';
import { DEV_CONFIG } from '../../module/dev/dev.config';
import { Dev } from '../../module/dev/model/dev';
import { DevService } from '../../module/dev/service/dev.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public devs: Array<Dev>;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private titleService: TitleService, private devService: DevService, private router: Router) {}

  ngOnInit(): void {
    this.titleService.set('Home');

    this.getDevs();

    this.subs.push(
      this.devService.devsBS.subscribe((devs) => {
        this.devs = this.devService.getLastDevs();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe);
  }

  public getDevs(): void {
    this.devs = this.devService.getLastDevs();
  }

  public goAllDevs(): void {
    this.router.navigateByUrl(`${DEV_CONFIG.pathFront}/list`);
  }
}
