import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { CodeHttpResponseEnum } from '../../shared/enum/code-http-response.enum';
import { TitleService } from '../../core/service/title/title.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public codeError: number;

  public codeNotFound: number = CodeHttpResponseEnum.NotFound;
  public codeInternalServerError: number = CodeHttpResponseEnum.InternalServerError;

  public faFrown: IconDefinition = faFrownOpen;

  constructor(private titleService: TitleService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.codeError = this.activatedRoute.snapshot.data[0].code;
    this.titleService.set(`Erro ${this.codeError}`);
  }
}
