import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { ProductList } from '../../products/products';
import { localStorageToken } from '../../localstorage.token';


@Component({
  selector: 'atlas-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : ProductList[] = [];
  loading : boolean = true;

  constructor(private productServices : ProductsService, @Inject(localStorageToken) private localStorage:any){}

  ngOnInit(): void {
    this.getProduct()
    // console.log(this.localStorage.getItem('product'))
  }

  getProduct(){
    this.productServices.getProducts().subscribe({
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

