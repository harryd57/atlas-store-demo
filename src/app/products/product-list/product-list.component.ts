import { Component, Input, OnInit } from '@angular/core';
import { ProductList } from '../products';

@Component({
  selector: 'atlas-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() loading : boolean = true;
  @Input() product : ProductList[] = []
  @Input() searchText : string = ""
  @Input() totalItems : number = 0

  page: number = 1
  itemsPerPagelg : number = 10;
  itemsPerPagesm: number = 10
  count : number = 0
  autoHide : boolean = false;

  ngOnInit(): void {
    this.onAutoHide()
  }

  onTableDataChange(event: any){
    this.page = event
  }

  onAutoHide(): void{
    if(!this.product.length){
      this.autoHide = true;
    }else{
      this.autoHide = false
    }
  }

}
