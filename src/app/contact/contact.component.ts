import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  firstForm = new FormGroup({
    email: new FormControl(''), 
    message: new FormControl('') 
  })
  secondForm = new FormGroup({
    fName: new FormControl(''), 
    lName: new FormControl(''), 
    age: new FormControl(''), 
    email: new FormControl(''), 
    phoneNumber: new FormControl(''), 
    pickUpAdress: new FormControl(''),
    message: new FormControl('') 
  })
  
  printForm(){
    console.table(this.firstForm.value);
    console.table(this.secondForm.value);
  }
  
  
  returnForm(){
    Swal.fire({
      title: '<strong>Registration is complete</strong>',
      icon: 'info',
      html:
      `Dear castomer, you've registred as ${this.secondForm.value.fName} ${this.secondForm.value.lName}.<br>
      ${this.secondForm.value.age} years old, email: ${this.secondForm.value.email}, phone number: ${this.secondForm.value.phoneNumber}.<br>
      Your car () will be waiting you at ${this.secondForm.value.pickUpAdress}.`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirm',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        'Delete',
      cancelButtonAriaLabel: 'Thumbs down'
    })
   
  }
}
