import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('@wp-chunk/web-module/feature-home').then(m => m.WebModuleFeatureHomeModule),
      },
      {
        path: 'login',
        loadChildren: () => import('@wp-chunk/web-module/feature-login').then(m => m.WebModuleFeatureLoginModule),
      },
      {
        path: 'register',
        loadChildren: () => import('@wp-chunk/web-module/feature-register').then(m => m.WebModuleFeatureRegisterModule),
      },
    ]),
  ],
})
export class LayoutRoutingModule {}
