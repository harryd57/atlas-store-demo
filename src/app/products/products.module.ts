import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { GlobalModule } from '../global/global.module';
import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products.component';
import { SortComponent } from './sort/sort.component';
import { CustomFilterPipe } from './pipes/custom-fiter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    FilterComponent,
    ProductListComponent,
    SearchComponent,
    ProductsComponent,
    SortComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ]
})
export class ProductsModule { }
