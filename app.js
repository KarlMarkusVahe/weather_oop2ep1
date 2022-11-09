const weather = new Weather('Tallinn')
console.log(weather.getWeather())

const ui = new UI()

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}


getWeather()