class UI {
    constructor() {
        this.description = document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
        this.windDir = document.querySelector('#wind-dir')
        this.windSpeed = document.querySelector('#wind-speed')
        this.pressure = document.querySelector('#pressure')
        this.humidity = document.querySelector('#humidity')
    }

    drawWeather(data) {
        let celcius = Math.round(parseFloat(data.main.temp) - 273.15)
        let description = data.weather[0].description;
        // god forgive me for what im about to code
        this.description.innerHTML = description;
        this.temp.innerHTML = celcius + '&deg;';
        this.city.innerHTML = data.name;
        this.windDir.innerHTML = 'Wind Direction: ' + data.wind.deg + '&deg';
        this.windSpeed.innerHTML = 'Wind Speed: ' + data.wind.speed + ' m/s';
        this.pressure.innerHTML = 'Pressure: ' + data.main.pressure + ' Pa';
        this.humidity.innerHTML = 'Humididy: ' + data.main.humidity + '%'
    }
}