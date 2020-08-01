import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevComponentModule } from './component/dev-component.module';
import { DevRoutingModule } from './dev.routing.module';
import { DevEditPageComponent } from './page/dev-edit-page/dev-edit-page.component';
import { DevListPageComponent } from './page/dev-list-page/dev-list-page.component';
import { DevRegisterPageComponent } from './page/dev-register-page/dev-register-page.component';

@NgModule({
  declarations: [DevRegisterPageComponent, DevListPageComponent, DevEditPageComponent],
  imports: [CommonModule, DevRoutingModule, DevComponentModule]
})
export class DevModule {}
