import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./module/layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
