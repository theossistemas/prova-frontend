import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevComponentModule } from '../../module/dev/component/dev-component.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, DevComponentModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent]
})
export class ComponentModule {}
