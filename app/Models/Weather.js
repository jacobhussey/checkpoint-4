

export class Weather{
    constructor(data) {
        this.temp = data.main.temp 
    }



    get WeatherTemplate() {
        return `
        <div class="col-1 weather-card bg-dark p-2 elevation-3 rounded text-center text-white py-3 me-4" onclick="app.weatherController.ToggleWeather()"> 
        <h3 id="farenheit">${this.ComputeFarenheit()} Farenheit</h3> 
        <h3 class="visually-hidden" id="celsius">${this.ComputeCelsius()}<div><h3>Celsius</h3></div></h3> 
        </div>
        `
    }

     ComputeFarenheit(){
        let celsius = this.temp - 273.15
        let farenheit = celsius * (9 / 5) + 32
        farenheit = Math.floor(farenheit)
           return farenheit
    }

     ComputeCelsius() {
        let celsius = this.temp - 273.15
       celsius = Math.floor(celsius)
       return celsius
    }
}   

