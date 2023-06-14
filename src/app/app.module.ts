import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { GlobalModule } from './global/global.module';
import { ProductIdModule } from './product-id/product-id.module';
import { CartModule } from './cart/cart.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ProductsModule, 
    GlobalModule,
    ProductIdModule, 
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
