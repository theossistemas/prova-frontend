import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faEdit, faGraduationCap, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DEV_CONFIG } from '../../dev.config';
import { Dev } from '../../model/dev';
import { DevService } from '../../service/dev.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  public faGithub: IconDefinition = faGithub;
  public faTimes: IconDefinition = faTimes;
  public faEdit: IconDefinition = faEdit;
  public faLightbulb: IconDefinition = faLightbulb;
  public faGraduationCap: IconDefinition = faGraduationCap;

  @Input()
  public devs: Array<Dev>;

  @Input()
  public flexRowLarge: boolean = true;

  constructor(private devService: DevService, private router: Router) {}

  ngOnInit(): void {}

  public editItem(dev: Dev): void {
    this.router.navigateByUrl(`${DEV_CONFIG.pathFront}/edit/${dev.id}`);
  }

  public deleteItem(dev: Dev): void {
    if (confirm(`Realmente deseja excluir o(a) Dev ${dev.nome}?`)) {
      this.devService.delete(dev.id);
    }
  }
}
