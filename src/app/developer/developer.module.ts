import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RegisterDevComponent } from './register-dev/register-dev.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { DeveloperService } from './services/developer.service';
import { DeveloperRoutingModule } from './developer.route';
import { DeveloperAppComponent } from './developer.app.component';
import { GithubSearchComponent } from './github-search/github-search.component';


@NgModule({
    declarations: [
        RegisterDevComponent,
        UserCardComponent,
        HomeComponent,
        DeveloperAppComponent,
        GithubSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        NgxSpinnerModule,
        DeveloperRoutingModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
    ],
    providers: [
        DeveloperService
    ]
})
export class DeveloperModule { }
