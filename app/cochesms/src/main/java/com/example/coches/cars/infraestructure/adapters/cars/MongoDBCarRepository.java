package com.example.coches.cars.infraestructure.adapters.cars;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.example.coches.cars.domain.car.Car;
import com.example.coches.cars.domain.car.CarRepository;
import com.example.coches.cars.domain.criteria.Criteria;

@Repository 
@Primary
public class MongoDBCarRepository implements CarRepository {

	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public Car getCar(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Car> getCars() {
		// TODO Auto-generated method stub
		//System.out.println("Find all");
		List<Car> cars = mongoTemplate.findAll(Car.class);
        //System.out.println("After find all");
		return cars;
	}

	@Override
	public Car updateCar(Car car, String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Car deleteCar(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Car addCar(Car car) {
		// TODO Auto-generated method stub
		Car addedCar = mongoTemplate.insert(car, "cars");
		return addedCar;
	}

	@Override
	public List<Car> findByCriteria(Criteria criteria) {
		// TODO Auto-generated method stub
		return null;
	}

}