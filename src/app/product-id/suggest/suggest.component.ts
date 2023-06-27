import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { ProductList } from '../../products/products';

@Component({
  selector: 'atlas-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  product : ProductList[] = [];
  @Input() brandID : number = 0;
  loading : boolean = true;

  constructor(private productsServices: ProductsService){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    if (this.brandID > 0){
      this.productsServices.getProductByBrand(this.brandID).subscribe({
        next:(res)=>{
          this.product = res
          this.loading = false
        },
        error:(err)=>{
          console.log(err)
          this.loading = false
        }
      })
    }
  }
}
