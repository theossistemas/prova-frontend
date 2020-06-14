import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        MenuLoginComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        MenuLoginComponent
    ]
})
export class NavigationModule { }
