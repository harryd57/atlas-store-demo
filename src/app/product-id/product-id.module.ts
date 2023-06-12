import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { ProductIdComponent } from './product-id.component';
import { ProductComponent } from './product/product.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SuggestComponent } from './suggest/suggest.component';



@NgModule({
  declarations: [
    ProductIdComponent,
    ProductComponent,
    ReviewsComponent,
    SuggestComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ]
})
export class ProductIdModule { }