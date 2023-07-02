import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductList } from '../products/products';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'atlas-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit{

  id! : number;
  product : ProductList[] = [];
  loading : boolean = true;


  constructor(private router: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => { this.id = params['id']})
    this.getProduct()
  }

  getProduct() {
    this.productsService.getProductById(this.id).subscribe({
      next:(res)=>{
        this.product = res;
        this.loading = false
      },
      error:(err)=>{
        console.log(err)
        this.loading = false
      }
    })
  }

  onDisplay(id: number): void{
    this.loading = true
    this.id = id
    this.getProduct()
  }

}
