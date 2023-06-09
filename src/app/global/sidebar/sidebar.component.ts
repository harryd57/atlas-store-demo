import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  @Input() showSide! : boolean;
  @Input() title: string = ""

}
