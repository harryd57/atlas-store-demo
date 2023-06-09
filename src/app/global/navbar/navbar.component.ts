import { Component } from '@angular/core';

@Component({
  selector: 'atlas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hideNav : boolean = false;

  title : string = "ATLAS";

  toggle() {
    this.hideNav = !this.hideNav
  }
}
