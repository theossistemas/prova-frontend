import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Dev } from '../../model/dev';
import { DevSearch } from '../../model/dev-search';
import { DevService } from '../../service/dev.service';

@Component({
  selector: 'app-dev-list-page',
  templateUrl: './dev-list-page.component.html',
  styleUrls: ['./dev-list-page.component.scss']
})
export class DevListPageComponent implements OnInit, OnDestroy {
  public devs: Array<Dev>;

  public devSearch: DevSearch;

  public devByParams: boolean = false;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private devService: DevService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getParams();

    if (
      this.devSearch.especialidade ||
      this.devSearch.formacaoAcademica ||
      this.devSearch.estado ||
      this.devSearch.cidade
    ) {
      this.getDevsByParams(this.devSearch);
    } else {
      this.getDevs();
    }

    this.subs.push(
      this.router.events.subscribe((event) => {
        this.devByParams = false;
        if (event instanceof NavigationEnd) {
          if (event.url.split('?')[1]) {
            this.getParams();
            this.getDevsByParams(this.devSearch);
          } else {
            this.getDevs();
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe);
  }

  private getParams(): void {
    this.devSearch = new DevSearch();

    let queryParams = this.activatedRoute.snapshot.queryParams;

    this.devSearch.especialidade = queryParams.especialidade;
    this.devSearch.formacaoAcademica = queryParams.formacaoAcademica;
    this.devSearch.estado = queryParams.estado;
    this.devSearch.cidade = queryParams.cidade;
  }

  private getDevs(): void {
    this.devByParams = false;
    this.devs = this.devService.getAllLastDevs();
  }

  private getDevsByParams(devSearch: DevSearch): void {
    this.devByParams = true;
    this.devs = this.devService.search(devSearch);
  }
}
