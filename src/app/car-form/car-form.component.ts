import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
import { cars, Icars } from '../cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  cars: Array<Icars> = cars;
  
  
  constructor() { }


  carForm = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    insurance: new FormControl(''),
    pricePerDay: new FormControl(''),
    fuelType: new FormControl(''),
    seatNum: new FormControl(''),
    image: new FormControl(''),

  })

  returnCarForm(car: Icars){
    this.cars.push(car);

    console.log(this.cars)
  }

  printForm(){
    console.table(this.carForm.value);
  }

  ngOnInit(): void {
  }

}
