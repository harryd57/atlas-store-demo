import { Component } from '@angular/core';
import {data} from '../../global/productData'

@Component({
  selector: 'atlas-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})
export class ProductComponent {
    data: any = data;
}
