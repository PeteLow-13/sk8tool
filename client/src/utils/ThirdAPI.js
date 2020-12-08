import axios from 'axios';
const {REACT_APP_OPEN_WEATHER_APIKEY} = process.env;
const {REACT_APP_GOOGLE_MAP_APIKEY} = process.env;
export default {
  getCityLocaltion: (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_OPEN_WEATHER_APIKEY}`)
  },
  getCityWeather: (latitude, longitude) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_OPEN_WEATHER_APIKEY}`)
  },
  getGoogleMapAPI: () => {
    return `${REACT_APP_GOOGLE_MAP_APIKEY}`
  }


  // function getCityWeather(city) {
//   $.ajax({
//     method: 'GET',
//     url: `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=e93223a6b1823d41860077c8e54b5206`
//   }).then((response) => {
//     const latitude = response.coord.lat;
//     const longitude = response.coord.lon;

//     $.ajax({
//       method: 'GET',
//       url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`
//     }).then((response) => {
//       const forecastRow = $('#forecast-row');
//       forecastRow.empty();

//       for (let i = 0; i < 6; i++) {
//         const fDate = new Date(response.daily[i].dt * 1000);
//         const fTemp = (((response.daily[i].temp.max - 273.15) * (9 / 5) + 32).toFixed(0));
//         const fLowTemp = (((response.daily[i].temp.min - 273.15) * (9 / 5) + 32).toFixed(0));
//         const fHumidity = response.daily[i].humidity;
//         const fIcon = response.daily[i].weather[0].icon;

//         const data = document.createElement('td');

//         const dateHeader = document.createElement('h3');
//         dateHeader.innerHTML = fDate.toLocaleDateString();
//         data.append(dateHeader);

//         const icon = document.createElement('img');
//         icon.setAttribute('src', `https://openweathermap.org/img/wn/${fIcon}@2x.png`);
//         data.append(icon);

//         const tempSpan = document.createElement('div');
//         tempSpan.innerHTML = `High Temp: ${fTemp} °`;
//         data.append(tempSpan);

//         const lowTempSpan = document.createElement('div');
//         lowTempSpan.innerHTML = `Low Temp: ${fLowTemp}°`;
//         data.append(lowTempSpan);

//         const humiditySpan = document.createElement('div');
//         humiditySpan.innerHTML = `Humidity ${fHumidity}%`;
//         data.append(humiditySpan);

//         forecastRow.append(data);
//       }
//     }).fail(err => console.error(err));
//   }).fail(err => console.error(err));
}