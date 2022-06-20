import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('@wp-chunk/web-module/layout').then(m => m.WebModuleLayoutModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
