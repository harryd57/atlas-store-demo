import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GlobalComponent } from './global.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    GlobalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class GlobalModule { }
