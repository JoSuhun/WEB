const API_KEY = "992a0fea7768b02da6e57322eba08488"

function onGeoOK(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError() {
    alert('cant find you. no wheater for you ...')
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)

