import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiButtonModule } from '@wp-chunk/shared/ui-button';
import { SharedUiInputModule } from '@wp-chunk/shared/ui-input';
import { SharedUiSliderModule } from '@wp-chunk/shared/ui-slider';

@NgModule({
  imports: [CommonModule, SharedUiInputModule, SharedUiButtonModule, SharedUiSliderModule],
})
export class SharedModule {}
