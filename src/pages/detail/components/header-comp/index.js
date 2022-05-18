import { IMG_BACK } from '../../../../constants';
import WeatherLogo from '../../../../components/weather-logo';

export default function HeaderComp(props) {
  const { weather } = props.weather || {};

  return (
    <div className="detail-header">
      <div className="detail-header__left">
        <img alt="" src={IMG_BACK} />
        <p>杭州市，<br/> 浙江省</p>
      </div>
      <div className="detail-header__img">
        { weather ? <WeatherLogo weather={weather} width={100} /> : null }
      </div>

    </div>
  )
}