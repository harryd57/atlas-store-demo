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
  searchText : string = ""
  totalProducts : number = 0

  constructor(private productService:ProductsService) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe({
      next:(res)=>{
        this.products = this.shuffle(res)
        this.totalProducts = res.length;
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

  onShowCategory(id : number) : void{
    this.loading = true
    this.productService.getProductByCategory(id).subscribe({
      next:(res)=>{
        this.products = res
        this.totalProducts = res.length;
        console.log(this.products);
        this.loading = false
      },
      error:(err)=>{console.log(err); this.loading = false}
    })
  }


  onShowBrand(id : number) : void{
    this.loading = true
    this.productService.getProductByBrand(id).subscribe({
      next:(res)=>{
        this.products = res
        this.totalProducts = res.length;
        console.log(this.products);
        this.loading = false
      },
      error:(err)=>{console.log(err); this.loading = false}
    })
  }

  onSortPrice(price : string): void{
    this.loading = true
    this.productService.getProductsByPrice(price).subscribe({
      next:(res)=>{
        this.products = res
        this.totalProducts = res.length;
        console.log(this.products);
        this.loading = false
      },
      error:(err)=>{console.log(err); this.loading = false}
    })
  }

  onShowAll(all : string): void{
    this.loading = true
    this.getProduct()
    console.log(`display ${all} products`);
  }

  onShowSearch(search: string): void{
    this.loading = true;
    this.productService.getProductsBySearch(search).subscribe({
      next:(res)=>{
        this.products = res
        this.totalProducts = res.length;
        console.log(this.products);
        this.loading = false
      },
      error:(err)=>{console.log(err); this.loading = false}
    })
  }

  //Disabled
  onSearchText(keyword : string): void{
    this.searchText = keyword
  }

  onPriceValue(price : any): void{
    this.loading = true;
    this.productService.getProductsByPriceValue(price.min, price.max).subscribe({
      next:(res)=>{
        this.products = res
        this.totalProducts = res.length;
        console.log(this.products);
        this.loading = false
      },
      error:(err)=>{console.log(err); this.loading = false}
    })
  }
} 