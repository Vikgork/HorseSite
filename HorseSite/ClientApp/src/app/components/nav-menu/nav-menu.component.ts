import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavMenuComponent {
  isExpanded = false;
  items: string[] = [
    'Sing in',
    'Sign up',
  ];
  collapse() {
    this.isExpanded = false;
  }

  onShown(){

  }

  onHidden(){

  }

  isOpenChange(){

  }

  Hide(){
    (document).getElementById("basic-link-dropdown")?.classList.remove("show");
  }
  Show(){
    (document).getElementById("basic-link-dropdown")?.classList.toggle("show");
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  } 
}
