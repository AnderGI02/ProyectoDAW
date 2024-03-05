package com.example.coches.Domain.Entities;

import com.example.coches.Domain.ValueObjects.CarBrand;
import com.example.coches.Domain.ValueObjects.CarDescription;
import com.example.coches.Domain.ValueObjects.CarPrice;
import com.example.coches.Domain.ValueObjects.CarTitle;
import com.example.coches.Domain.ValueObjects.CarUrl;

public class Car {
	private CarTitle title;
	private CarDescription description;
	private CarBrand brand;
	private CarUrl carImageURL;
	private CarUrl carAnnouncementUrl;
	private CarPrice price;
	
	public Car(
			String title, 
			String description,
			String brand,
			Double precio,
			String carImageUrl,
			String carAnnouncmentURL) {
		this.title = new CarTitle(title);
		this.description = new CarDescription(description);
		this.brand = new CarBrand(brand);
		this.price = new CarPrice(precio);
		this.carImageURL = carImageURL;
		this.carAnnouncementUrl = carAnnouncementUrl;
	}
	
	public String getTitleValue() {
		return this.title.getValue();
	}
	
	public String getDescriptionValue() {
		return this.description.getValue();
	}
	
	public Double getDoubleValue() {
		return this.price.getValue();
	}

	public String getBrandValue() {
		return this.brand.getValue();
	}	
	

	public String getCariMAGEURLValue() {
		return this.carImageURL.getValue();
	}
	
	public String getCarAnnouncmentURLValue() {
		return this.carAnnouncementUrl.getValue();
	}
	
	public void updateTitle(String title) {
		this.title = new CarTitle(title);
	}
	
	public void updateDescription(String description) {
		this.description = new CarDescription(description);
	}
	
	public void updateCarImageUrl(String url) {
		this.carImageURL = new CarUrl(url);
	}
	
}