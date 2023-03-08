import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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
    // alert("You're a VIP now!");
    Swal.fire({
      title: "<strong>You're a VIP now!</strong>",
      icon: 'info',
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
    })
  }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
