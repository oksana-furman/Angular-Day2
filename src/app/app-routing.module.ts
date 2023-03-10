import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "contact", component: ContactComponent
}, {
  path:"cars", component: CarsComponent
}, {
  path:"cars/:id", component: DetailsComponent
}, {
  path: "car-form", component: CarFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
