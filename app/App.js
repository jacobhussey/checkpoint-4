import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/imagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController
  quotesController = new QuotesController
  weatherController = new WeatherController
  clockController = new ClockController
}

window["app"] = new App();
