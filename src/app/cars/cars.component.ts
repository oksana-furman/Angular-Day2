import { Component, OnInit } from '@angular/core';
import { cars } from '../cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  newCars = cars;
  constructor() { }

  ngOnInit(): void {
  }

}
