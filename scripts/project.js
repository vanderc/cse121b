let weather = document.getElementById("weatherDiv");
let searchBtn = document.getElementById("search");
let cityReference = document.getElementById("city");
let key = "b4f039a7f4409449f111d776279a66e0";


let getWeather = (city) => {
  let lat = city[0].lat;
  let lon = city[0].lon;
  cityReference.value = "";
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${key}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      weather.innerHTML = 
      `<h1>Weather for ${city[0].name}</h1>
      <h2>Todays Forecast</h2>
      <h2>Current Temperature</h2>
      <h3>${data.current.temp}&#176;F</h3>
      <h2>Today's Minimum Temperature</h2>
      <h3>${data.daily[0].temp.min}&#176;F</h3>
      <h2>Today's Maximum Temperature</h2>
      <h3>${data.daily[0].temp.max}&#176;F</h3>`;
    }) 
    .catch(() => {
      weather.innerHTML = `<h3 class="msg">Please try again</h3>`;
    });
};

async function getCityData() {
  let cityValue = cityReference.value;
  if (cityValue.length == 0) {
    weather.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  else {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${key}`);
    let cityOutput = await response.json();
    getWeather(cityOutput);
  }
};


search.addEventListener("click", getCityData);