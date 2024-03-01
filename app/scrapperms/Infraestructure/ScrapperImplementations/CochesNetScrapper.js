import { Scrapper } from "../../domain/ports/ScrapperInterface.js";
import puppeteer from "puppeteer";
import { CochesNetConstConfig } from "../WebConstants/CochesNetConst.js";
const COCHEA_COMPETICION_URL_COCHES_NET =
  "https://www.coches.net/clasicos-competicion/";
export const CochesNetScrapper = () => {
  const basicData = {
    scrappWeb: async () => {
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400,
      });

      const page = await browser.newPage();

      await page.goto(COCHEA_COMPETICION_URL_COCHES_NET);

      // Hacemos un destructuring de SoulAutoConstConfig
      const data = await page.evaluate(
        ({
          CARS_CONTAINER_DOM_SELECTOR,
          CAR_TITLE_AND_SOURCE_DOM_SELECTOR_FROM_CAR,
          CAR_PRICE_DOM_SELECTOR_FROM_CAR,
          CAR_DETAILS_CONTAINER_INFO_DOM_SELECTOR_FROM_CAR,
        }) => {
          const data = [];
          const carsList = [
            ...document.querySelectorAll(CARS_CONTAINER_DOM_SELECTOR),
          ];

          for (const car of carsList) {
            const source = car.querySelector(
              CAR_TITLE_AND_SOURCE_DOM_SELECTOR_FROM_CAR
            ).href;
            const title = car.querySelector(
              CAR_TITLE_AND_SOURCE_DOM_SELECTOR_FROM_CAR
            ).title;
            const currentPriceText = car.querySelector(
              CAR_PRICE_DOM_SELECTOR_FROM_CAR
            ).innerText;
            const currentPrice = parseFloat(carPriceText.replace(/\s|€/g, ""));
            const carDetailsInfo = car.querySelector(
              CAR_DETAILS_CONTAINER_INFO_DOM_SELECTOR_FROM_CAR
            ).innerText;
            const imageURL = car.querySelector(
              "img.mt-GalleryBasic-sliderImage.mt-GalleryBasic-sliderImage--squared"
            ).src;
            console.log({
              title,
              imageURL,
              source,
              currentPrice,
              carDetailsInfo,
            });
            data.push({
              title,
              imageURL,
              source,
              currentPrice,
              carDetailsInfo,
            });
          }

          return data;
        },
        CochesNetConstConfig
      );
      await page.close();

      return data;
    },
  };

  const composite = Scrapper(basicData);

  return Object.assign(Object.create(composite), basicData);
};
