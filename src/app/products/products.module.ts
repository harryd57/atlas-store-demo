import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products.component';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [
    FilterComponent,
    ProductListComponent,
    SearchComponent,
    ProductsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ]
})
export class ProductsModule { }
