import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
  message: new FormControl('') 
})

  constructor() { }

  ngOnInit(): void {
  }

}
