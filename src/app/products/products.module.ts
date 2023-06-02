import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    FilterComponent,
    ProductListComponent,
    SearchComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
