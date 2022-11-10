const weather = new Weather('Tallinn')
console.log(weather.getWeather())

const ui = new UI()

const form = document.querySelector('#change-city')
form.addEventListener('submit', changeWeather)

function changeWeather(event){
    console.log(event.type)
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()