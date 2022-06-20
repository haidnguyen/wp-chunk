import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, RegisterRoutingModule],
  declarations: [RegisterComponent],
})
export class WebModuleFeatureRegisterModule {}
