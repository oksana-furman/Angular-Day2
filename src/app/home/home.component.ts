import { Component, OnInit } from '@angular/core';
import { cars } from '../cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
newCars = cars;
  constructor() { }

  ngOnInit(): void {
  }

}
