import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isDisplay: boolean = false;

  public _toggleSidebar() {
    this.isDisplay = !this.isDisplay;
  }  

}
