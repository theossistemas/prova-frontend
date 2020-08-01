import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../core/service/title/title.service';

@Component({
  selector: 'app-dev-register-page',
  templateUrl: './dev-register-page.component.html',
  styleUrls: ['./dev-register-page.component.scss']
})
export class DevRegisterPageComponent implements OnInit {
  public pageName: string = 'Cadastrar Dev';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.set(this.pageName);
  }
}
