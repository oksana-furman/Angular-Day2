import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { cars, Icars } from '../cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  newCars: Array<Icars> = cars;
  
  constructor() { }


  carForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    insurance: new FormControl('', Validators.required),
    pricePerDay: new FormControl('', Validators.required),
    fuelType: new FormControl('', Validators.required),
    seatNum: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),

  })

   addCar(){
    let error = document.getElementById("error") as HTMLElement;
    let formDiv = document.getElementById("formDiv") as HTMLElement;

    if (this.carForm.valid) {
      let myVal: any = this.carForm.value;
      this.newCars.push(myVal);
    } else {
      error.style.color = "red";
      formDiv.style.border = "2px solid red";
      error.innerHTML = "Please provide some information in every input field!";
    }
     

    console.log(this.newCars);
  }

  printForm(){
    console.table(this.carForm.value);
  }

  ngOnInit(): void {
  }

}
