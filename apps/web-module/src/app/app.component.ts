import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wp-chunk-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'web-module';
}
