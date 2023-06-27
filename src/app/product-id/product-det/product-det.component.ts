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
}
