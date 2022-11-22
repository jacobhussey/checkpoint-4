import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js"



class WeatherService {

    async getWeather() {
        const res = await weatherApi.get()
        // console.log('got weather', res.data);
        appState.weather = new Weather(res.data)
    }

}


export const weatherService = new WeatherService