import React, {useEffect, useState} from 'react'
import Container from '../Container'
import ThirdAPI from '../../utils/ThirdAPI';

function Weather({city}) {
    const [weatherArr, setWeatherArr] = useState([]);
    const getWeatherInfo = (city) => {
        ThirdAPI.getCityLocaltion('seattle')
        .then(res => {
            console.log(res.data)
            const {lon, lat} = res.data.coord;
            ThirdAPI.getCityWeather(lat, lon)
                .then(res => {
                    console.log(res.data.daily)
                    let dailyWeather = res.data.daily;
                    setWeatherArr(dailyWeather);
                })
                .catch(err => console.error(err));

        })
        .catch(err => console.error(err));
    }
    useEffect(() => {
        console.log('weather: ', city)
        getWeatherInfo(city);
    }, [])
    return (
        <div>
            <Container>
                <h1>Weather</h1>
                {
                    weatherArr.map((datas) => (
                        <div key={datas.dt}>
                            <div>Date: {Math.floor(new Date(datas.dt)/1000.0)}</div>
                            <div>Max Temp: {(((datas.temp.max - 273.15) * (9/5) + 32).toFixed(0))}</div>
                            <div>Max Temp: {(((datas.temp.min - 273.15) * (9/5) + 32).toFixed(0))}</div>
                            <div>Humidity: {datas.humidity}</div>
                            <div><img src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}/></div>
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default Weather
