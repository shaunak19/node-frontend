import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isDash:string="";
  constructor() { }

  ngOnInit(): void {
   this.isDash="dashboard";
  }

  change(x:string){
    if(x==="dashboard")
      this.isDash="dashboard";
  }
}
