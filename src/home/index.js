import axios from 'axios';
import { useEffect, useState } from 'react';
import HeaderComp from './components/header-comp';
import ButtomComp from './components/bottom-comp';
import Card from './components/card';
import InfoList from './components/info-list';
import './style.scss';

export default function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get('https://restapi.amap.com/v3/weather/weatherInfo?city=330100&key=1bc7cd5d9f62b610161eeb206b5f4d47')
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          setWeatherData(data.lives[0]);
        }
      })
  }, []);

  return (
    <div className="dashbord">
      <HeaderComp />
      { weatherData.weather ? <Card weather={weatherData} /> : null }
      { weatherData.weather ? <InfoList weather={weatherData} /> : null }
      <ButtomComp />
    </div>
  )
}