import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEV_CONFIG } from './module/dev/dev.config';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: DEV_CONFIG.pathModule,
    loadChildren: () => import('./module/dev/dev.module').then((m) => m.DevModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
