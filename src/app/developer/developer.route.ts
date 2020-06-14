import { DeveloperAppComponent } from './developer.app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { DevelperGuard } from './services/developer.guard';

const developerRouterConfig: Routes = [
    {
        path: '', component: DeveloperAppComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'user-card', component: UserCardComponent },
            { path: 'github', component: GithubSearchComponent },

            /* Rota com guarda
            {
                path: 'home', component: HomeComponent,
                canActivate: [DevelperGuard],
                data: [{ claim: { nome: 'developer', valor: 'add' } }]
            } */
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(developerRouterConfig)],
    exports: [RouterModule]
})
export class DeveloperRoutingModule { }
