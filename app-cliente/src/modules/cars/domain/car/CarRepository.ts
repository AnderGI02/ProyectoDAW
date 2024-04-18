import { Observable } from "rxjs";
import { Car, CarBrand, CarId } from "./Car";
import { CriteriaJSON } from "../criteria/Criteria";

export interface CarRepository {
    getCar : (id:String) => Observable<Car>,
    getAllCars: () => Observable<Car[]>
    matching: (criteriaJson:CriteriaJSON) => Observable<Car[]>; // en vez de filters tendriamos el criteria
    getAllCarBrands: () => Observable<String[]>;
}

// Coge el CarId
export type GetCarsMatchingCriteria = (criteria:CriteriaJSON) => Promise<Car[]>; 
