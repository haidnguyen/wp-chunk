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
    ]),
  ],
})
export class LayoutRoutingModule {}
