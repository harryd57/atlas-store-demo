import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { GlobalModule } from '../global/global.module';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CartComponent,
    CartitemsComponent,
  ],
  imports: [
    CommonModule, 
    GlobalModule,
    AppRoutingModule
  ]
})
export class CartModule { }
