import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atlas-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() sortPrice = new EventEmitter<string>();

  onSortPrice(price : string): void{
    this.sortPrice.next(price)
  }
}