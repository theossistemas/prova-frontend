import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevCardComponent } from './dev-card/dev-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { DevListComponent } from './dev-list/dev-list.component';
import { DevEditComponent } from './dev-edit/dev-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import * as devListReducer from '../reducers/dev-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DevListEffects } from '../effects/dev-list.effects';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    DevCardComponent,
    NavbarComponent,
    DevListComponent,
    DevEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      // positionClass: 'toast-top-full-width',
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ReactiveComponentModule,
    StoreModule.forRoot({
      devList: devListReducer.reducer
    }),
    EffectsModule.forRoot([
      DevListEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithubSquare);
  }
}
