import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevelopersComponent } from './developers/developers.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
