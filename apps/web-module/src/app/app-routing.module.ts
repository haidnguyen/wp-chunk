import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('@wp-chunk/web-module/feature-home').then(m => m.WebModuleFeatureHomeModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
