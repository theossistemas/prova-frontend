import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DevComponentModule } from './module/dev/component/dev-component.module';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ComponentModule } from './shared/component/component.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ErrorPageComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ComponentModule, DevComponentModule, FontAwesomeModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
