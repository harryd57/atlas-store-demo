import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FilterList } from './filter';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'atlas-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  @Output() showCategory = new EventEmitter<number>();
  @Output() showBrand = new EventEmitter<number>();
  @Output() showAll = new EventEmitter<string>();
  @Output() searchText = new EventEmitter<string>();
  @Output() priceValue = new EventEmitter<any>();

  category : FilterList[] = [];
  brand : FilterList[] = [];
  loading : boolean = true;
  values = {min: 0, max: 100000}


  constructor(private productServices: ProductsService){}

  ngOnInit(): void {
    this.getCategory();
    this.getBrand();
  }

  getCategory(){
    this.productServices.getCategories().subscribe({
      next:(res)=>{
        this.category = res;
      },
      error:(err)=>{console.log(err)}
    })
  }

  getBrand(){
    this.productServices.getBrands().subscribe({
      next:(res)=>{
        this.brand = res;
        this.loading = false;
      },
      error:(err)=>{console.log(err)}
    })
  }

  onShowCategory(id : number) : void{
    this.showCategory.next(id)
  }

  onShowBrand(id : number) : void{
    this.showBrand.next(id)
  }

  onShowAllProducts(all : string): void{
    this.showAll.next(all)
    }

    //Disabled
    onSearchText(keyword : string) : void{
      this.searchText.next(keyword)
    }

    onPriceValue(min: string, max: string): void{
      if(min && max){
        this.values.min = parseInt(min);
        this.values.max = parseInt(max);
        this.priceValue.next(this.values)
      }else{
        this.priceValue.next(this.values)
      }
    }
  }

