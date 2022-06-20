import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class WebModuleLayoutModule {}
