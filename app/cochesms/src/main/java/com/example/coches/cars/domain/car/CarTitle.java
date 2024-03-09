package com.example.coches.cars.domain.car;
import java.util.Objects;

final public class CarTitle {
	private String value;
	
	public CarTitle(String titulo) {
		this.value = this.asignarValor(titulo);
	}
	
	public String getValue() {
		return this.value;
	}
	
	private String asignarValor(String titulo) {
		// TODO Auto-generated method stub
		if(titulo == null || titulo.isBlank())return null;
		return titulo.toLowerCase();
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarTitle other = (CarTitle) obj;
		return Objects.equals(value, other.value);
	}

	@Override
	public String toString() {
		return this.value;
	}
}
