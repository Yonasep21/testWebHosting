const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY ="dfce0b8b493818f720dc322aaff22b3d"

function onGeoOk(position){
    const lat = position.coords.latitude 
    const log = position.coords.longitude 
    //console.log("you live in" lat, log)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("can't find your location")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)