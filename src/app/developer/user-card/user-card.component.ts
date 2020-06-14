import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Developer } from '../models/developer';
import { DeveloperService } from '../services/developer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {

  developers: Developer[];
  developer: Developer;
  errorMessage: string;

  constructor(private developerService: DeveloperService,
    private tosatr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    this.developerService.getList()
      .subscribe(
        res => this.developers = res,
        error => this.errorMessage
      );
    console.log(this.developers);

  }

  deleteDeveloper(developer) {
    console.log(developer);
    this.developerService.delete(developer.name)
      .subscribe(
        res => { this.ifSuccess(res); },
        error => { this.ifFail(error); }
      );
  }

  ifSuccess(theEvent: any) {
    this.router.navigateByUrl('/developer/register-dev', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/developer/home']);
    });
  }

  ifFail(fail: any) {
    this.tosatr.error('Erro ao exclui Developer', 'Falha!');
  }

}
