import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEV_CONFIG } from './module/dev/dev.config';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CodeHttpResponseEnum } from './shared/enum/code-http-response.enum';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: DEV_CONFIG.pathModule,
    loadChildren: () => import('./module/dev/dev.module').then((m) => m.DevModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: ErrorPageComponent, data: [{ code: CodeHttpResponseEnum.NotFound }] },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
