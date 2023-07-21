import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { GlobalModule } from '../global/global.module';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ]
})
export class CheckoutModule { }
