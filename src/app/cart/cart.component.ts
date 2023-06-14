import { Component } from '@angular/core';
import { CartData } from 'src/app/global/cartData';

@Component({
  selector: 'atlas-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:any = CartData

  removeItem(id:any){
     this.cart = this.cart.filter((item:any) => item.id !== id)
     
      
     
    
  }
}
