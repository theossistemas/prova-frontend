// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Dependencies
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

// NgRx Dependencies
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';

// Other Dependencies
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

// My Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DevCardComponent } from './devs/components/dev-card/dev-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DevListComponent } from './devs/components/dev-list/dev-list.component';
import { DevEditComponent } from './devs/components/dev-edit/dev-edit.component';

// My NgRx Stores
import * as fromReducer from './devs/store/dev-list.reducer';
import * as fromEffects from './devs/store/dev-list.effects';

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
      devList: fromReducer.reducer
    }),
    EffectsModule.forRoot([
      fromEffects.DevListEffects
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
