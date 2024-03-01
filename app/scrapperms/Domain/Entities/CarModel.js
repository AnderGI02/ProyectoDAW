import { CarId } from "../ValueObjects/CarId.js";
import { CarTitle } from "../ValueObjects/CarTitle.js";
import { CarDescription } from "../ValueObjects/CarDescription.js";
import { CarURL } from "../ValueObjects/CarURL.js";
import { CarPrice } from "../ValueObjects/CarPrice.js";
import { CarBetAmount } from "../ValueObjects/CarBetAmount.js";
import { CarBrand } from "../ValueObjects/CarBrand.js";

export const CarModel = ({
  title,
  description,
  brand,
  imageURL,
  source,
  currentPrice,
  betAmount,
  reservePrice,
  carDetailsInfo = null,
}) => ({
  id: CarId(),
  title: CarTitle(title),
  description: CarDescription(description),
  brand: CarBrand(brand),
  imageURL: CarURL(imageURL),
  source: CarURL(source),
  currentPrice: CarPrice(currentPrice),
  betAmount: CarBetAmount(betAmount),
  reservePrice: CarPrice(reservePrice),
  carDetailsInfo,
});
