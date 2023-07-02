import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atlas-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() showSearch = new EventEmitter<string>();

  onShowSearch(search: string): void {
    this.showSearch.next(search)
  }

}
