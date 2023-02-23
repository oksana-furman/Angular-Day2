import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 money: number = 0;
  donate(){
  this.money += 10;
  if(this.money>=200){
    alert("You're a VIP now!");
  }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
