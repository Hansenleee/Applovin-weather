import { useEffect, useState } from 'react';
import HeaderComp from './components/header-comp';
import ButtomComp from './components/bottom-comp';
import Card from './components/card';
import InfoList from './components/info-list';
import { getDayWeather } from '../../services';
import './style.scss';

export default function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getDayWeather()
      .then((res) => {
        setWeatherData(res)
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