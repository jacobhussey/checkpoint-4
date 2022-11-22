import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
    let weather = appState.weather
    setHTML('weather', weather.WeatherTemplate)
}


export class WeatherController {
    constructor(){
        // console.log('this is the weather controller');
        this.getWeather()
        appState.on('weather', _drawWeather)
    }


    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    ToggleWeather() {
        document.querySelector(".farenheit").classList.toggle('visually-hidden')
        document.querySelector(".celsius").classList.toggle('visually-hidden')
    }

}