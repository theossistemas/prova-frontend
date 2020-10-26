import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevInfo } from 'projects/developer-registration/src/entities/dev-info';
import { environment } from '../../environments/environment';
import { DevService } from '../../services/dev.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})
export class DevCardComponent implements OnInit {
  @Input() dev: DevInfo;
  @Input() devList: DevInfo[];

  constructor(
    private router: Router,
    private devService: DevService,
    private ngxSpinnerService: NgxSpinnerService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  editDev(): void {
    this.router.navigate(['/edit-dev/' + this.dev.id]);
  }

  deleteDev(): void {
    this.ngxSpinnerService.show();

    this.devService.delete(this.dev.id).subscribe(
      () => this.completeDeleteAction(),
      err => {
        this.ngxSpinnerService.hide();
        this.toastrService.error('Falha ao deletar desenvolvedor.');
        console.error(err);
      }
    );
  }

  private completeDeleteAction(): void {
    this.ngxSpinnerService.hide();
    const index = this.devList.findIndex(d => d.id === this.dev.id);
    const deletedDev = this.devList[index];
    this.devList.splice(index, 1);
    this.toastrService.success('Desenvolvedor ' + deletedDev.name + ' excluído.');
  }

  defaultAvatarURL(): string {
    return  '../../assets/default-avatar.png';
  }

  githubLocation(dev: DevInfo): string {
    let githubURL = environment.githubURL;

    if (!githubURL || githubURL.trim().length === 0) {
      this.toastrService.error('Falha ao construir URL do GitHub do Usuário.');
      throw new Error('GitHub Env not configured');
    }

    if (!githubURL.endsWith('/')) {
      githubURL += '/';
    }

    return githubURL.concat(dev.github);
  }
}
