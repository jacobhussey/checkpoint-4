import { ImagesController } from "./Controllers/imagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController
  quotesController = new QuotesController
  weatherController = new WeatherController
  todoController = new TodoController
}

window["app"] = new App();
