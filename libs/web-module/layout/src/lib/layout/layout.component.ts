import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wp-chunk-layout',
  template: `
    <wp-chunk-header></wp-chunk-header>
    <router-outlet></router-outlet>
    <wp-chunk-footer></wp-chunk-footer>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
