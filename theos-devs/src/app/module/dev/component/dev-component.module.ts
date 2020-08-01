import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipeModule } from '../../../shared/pipe/pipe.module';
import { DevBtnLinkAddDevComponent } from './dev-btn-link-add-dev/dev-btn-link-add-dev.component';
import { DevFormRegisterComponent } from './dev-form-register/dev-form-register.component';
import { DevFormSearchComponent } from './dev-form-search/dev-form-search.component';
import { DevListComponent } from './dev-list/dev-list.component';

@NgModule({
  declarations: [DevFormSearchComponent, DevListComponent, DevFormRegisterComponent, DevBtnLinkAddDevComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, PipeModule],
  exports: [DevFormSearchComponent, DevListComponent, DevFormRegisterComponent, DevBtnLinkAddDevComponent]
})
export class DevComponentModule {}
