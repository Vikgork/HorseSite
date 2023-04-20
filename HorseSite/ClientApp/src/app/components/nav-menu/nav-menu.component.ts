import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  dropDownDBClick(){
    this.shutdowndrop();
    document.getElementById("DBdrop")?.classList.toggle("show");
  }
  dropDownMPClick(){
    this.shutdowndrop();
    document.getElementById("MPdrop")?.classList.toggle("show");
  }
  dropDownDLClick(){
    this.shutdowndrop();
    document.getElementById("DLdrop")?.classList.toggle("show");
  }
 
  shutdowndrop(){
    document.getElementById("MPdrop")?.classList.remove("show");
    document.getElementById("DLdrop")?.classList.remove("show");
    document.getElementById("DBdrop")?.classList.remove("show");
  }

  
}
