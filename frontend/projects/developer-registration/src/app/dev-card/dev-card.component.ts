import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevInfo } from 'projects/developer-registration/src/entities/dev-info';
import { environment } from '../../environments/environment';
import { DevService } from '../../services/dev.service';

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
    private devService: DevService
  ) { }

  ngOnInit(): void {
  }

  editDev(): void {
    this.router.navigate(['/edit-dev/' + this.dev.id]);
  }

  deleteDev(): void {
    this.devService.delete(this.dev.id).subscribe(
      () => {
        const index = this.devList.findIndex(d => d.id === this.dev.id);
        this.devList.splice(index, 1);
      },
      err => console.error(err)
    );
  }

  defaultAvatarURL(): string {
    return  '../../assets/default-avatar.png';
  }

  githubLocation(dev: DevInfo): string {
    let githubURL = environment.githubURL;

    if (!githubURL || githubURL.trim().length === 0) {
      throw new Error('GitHub Env not configured');
    }

    if (!githubURL.endsWith('/')) {
      githubURL += '/';
    }

    return githubURL.concat(dev.github);
  }
}
