import { NgModule } from '@angular/core';
import { GitHubService } from './git-hub/git-hub.service';
import { IbgeService } from './ibge/ibge.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  providers: [IbgeService, GitHubService, StorageService]
})
export class ServiceModule {}
