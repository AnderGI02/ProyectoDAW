package com.example.coches.cars.domain.convertCarToObjectNode;

import com.example.coches.cars.domain.car.Car;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class CarDescriptionToObjectNodeConverter implements CarFieldToObjectNodeConverter {

	@Override
	public ObjectNode convertCarFieltToObjectNode(Car car, ObjectMapper mapper) {
		// Crear un objeto ObjectNode para el campo 'description'
		ObjectNode descriptionNode = mapper.createObjectNode();
		descriptionNode.put("value", car.getDescriptionValue());
		return descriptionNode;
	}

}
