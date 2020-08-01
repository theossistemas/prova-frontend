import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DevComponentModule } from './module/dev/component/dev-component.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ComponentModule } from './shared/component/component.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ComponentModule, DevComponentModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
