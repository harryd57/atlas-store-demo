import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlas-product-det',
  templateUrl: './product-det.component.html',
  styleUrls: ['./product-det.component.css']
})
export class ProductDetComponent {

  @Input() name : string = "";
  @Input() price : number = 0;
  @Input() details : string = "";
  @Input() image : string = "";
  @Input() brand : string = "";

  quantity : number = 1;


  increase(): void{
    this.quantity++
  }
  decrease(): void{
    if(this.quantity === 1){
      this.quantity = 1
    }else{
      this.quantity--
    }
  }
}
