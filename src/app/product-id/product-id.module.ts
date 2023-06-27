import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { AppRoutingModule } from '../app-routing.module';
import { ProductIdComponent } from './product-id.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SuggestComponent } from './suggest/suggest.component';
import { ProductDetComponent } from './product-det/product-det.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ProductIdComponent,
    ReviewsComponent,
    SuggestComponent,
    ProductDetComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    HomeModule,
    AppRoutingModule
  ]
})
export class ProductIdModule { }