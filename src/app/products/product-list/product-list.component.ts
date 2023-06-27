import { Component, Input } from '@angular/core';
import { ProductList } from '../products';

@Component({
  selector: 'atlas-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() loading : boolean = true;
  @Input() product : ProductList[] = []
}
