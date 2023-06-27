import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductList } from '../products';


@Component({
  selector: 'atlas-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges{
  @Input() products : ProductList[] = []

  category : string[] = []

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategory(changes['products'].currentValue)
    console.log(changes['products'].currentValue)
    console.log(this.category)
  }

  ngOnInit(): void {
    
  }


  getCategory(array: ProductList[]){

    for(let product of array){
      if(product.categoryName !in this.category){
        this.category.push(product.categoryName)
      }
    }
    console.log(this.products)
    console.log(this.category)
  }

}
