const API_KEY = "4878e98d9dc4647bf2659cbd6ad97ec8";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        const name = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name ;
    })

}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)