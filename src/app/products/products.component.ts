import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { ProductList } from './products';


@Component({
  selector: 'atlas-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : ProductList[] = []

  loading : boolean = true

  constructor(private productService:ProductsService) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe({
      next:(res)=>{
        this.products = this.shuffle(res)
        console.log(this.products);
        this.loading = false
        // this.localStorage.setItem('product', this.products)  
      },
      error:(err)=>{console.log(err)
        this.loading = false
      }
    })
  }

  shuffle(array: ProductList[]){
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;
  }
} 