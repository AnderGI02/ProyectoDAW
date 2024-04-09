import { Component } from '@angular/core';
import { CarRepository } from '../../../../modules/cars/domain/car/CarRepository';
import { ApiCarService } from '../../../../modules/cars/infraestructure/api-car.service';
import { getAllCars } from '../../../../modules/cars/application/get/getAllCars/getAllCars';
import { Car } from '../../../../modules/cars/domain/car/Car';
import { CarComponent } from '../../car/car/car.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.css'
})
export class ListCarsComponent {
  public cars!:Car[];
  constructor(private apiRepo:ApiCarService, private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      const {cars} = params
      if (cars) {
        this.cars = JSON.parse(cars);
      } else {
        getAllCars(apiRepo).then(data => {
          this.cars = data
        })
      }
    });
  }
}