import { useEffect, useState } from "react";
import WeatherLogo from '../../../../components/weather-logo';
import Temperature from '../../../../components/temperature';
import { NUMS_CHN_MAP } from '../../../../constants';
import { getFutureDayWeather } from '../../../../services';

export default function FutureWeathre() {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    getFutureDayWeather().then(res => setForecasts(res));
  }, []);

  return (
    <div className="detail-forecasts">
      {
        forecasts.map((item, index) => {
          return (
            <div className="detail-forecasts__row" key={index}>
              <span className="week">周{NUMS_CHN_MAP[item.week]}</span>
              <WeatherLogo weather={item.dayweather} width='50px'/>
              <div className="temp">
                <Temperature temperature={item.daytemp} size="tiny" />
                <Temperature temperature={item.nighttemp} size="tiny" gray/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}