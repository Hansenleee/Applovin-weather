import { useEffect, useState } from 'react';
import HeaderComp from './components/header-comp';
import InfoTags from './components/info-tags';
import TodayWeather from './components/today-weather';
import FutureWeathre from './components/future-weather';
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
    <div className="detail">
      <HeaderComp weather={weatherData} />
      <InfoTags weather={weatherData} />
      <TodayWeather />
      <FutureWeathre />
    </div>
  )
}