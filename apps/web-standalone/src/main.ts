import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () => import('@wp-chunk/web-standalone/layout').then(m => m.LayoutComponent),
          loadChildren: () => import('@wp-chunk/web-standalone/layout').then(m => m.routes),
        },
      ])
    ),
  ],
}).catch(console.log.bind(console, 'bootstrap error: '));
