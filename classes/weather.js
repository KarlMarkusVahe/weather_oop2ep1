class Weather{
    constructor(city) {
        this.city = city
        this.key = 'a315ce8c5b7b9fd848b10c1a8a61c162'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
}