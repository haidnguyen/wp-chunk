import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
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
            loadChildren: () =>
              import('@wp-chunk/web-module/feature-register').then(m => m.WebModuleFeatureRegisterModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
