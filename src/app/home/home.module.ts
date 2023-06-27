import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { AppRoutingModule } from '../app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './product/product.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    IntroComponent,
    ProductComponent,
    NewsletterComponent,
    BrandsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    AppRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class HomeModule { }