import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../../../../core/service/title/title.service';
import { DEV_CONFIG } from '../../dev.config';
import { Dev } from '../../model/dev';
import { DevService } from '../../service/dev.service';
import { ToastService } from '../../../../core/service/toast/toast.service';

@Component({
  selector: 'app-dev-edit-page',
  templateUrl: './dev-edit-page.component.html',
  styleUrls: ['./dev-edit-page.component.scss']
})
export class DevEditPageComponent implements OnInit {
  public dev: Dev;

  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private devService: DevService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;
    this.getDev(id);
  }

  private getDev(id: number): void {
    this.dev = this.devService.getById(id);

    if (!this.dev) {
      this.toastService.error('Dev não encontrado.');
      this.router.navigateByUrl(`${DEV_CONFIG.pathFront}/list`);
      return;
    }

    this.titleService.set(this.dev.nome);
  }
}
