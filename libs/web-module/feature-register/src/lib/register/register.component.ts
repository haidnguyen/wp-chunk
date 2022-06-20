import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wp-chunk-register',
  template: `
    <p>register works!</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
