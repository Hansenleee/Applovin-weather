import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherLogo from '../../../../components/weather-logo';
import Temperature from '../../../../components/temperature';
import './style.scss';

export default function Card(props) {
  const { weather, temperature } = props.weather || {};
  const navigate = useNavigate();

  const handleGoDetail = useCallback(() => {
    navigate('detail');
  }, [navigate]);

  return (
    <div className="dashbord-card">
      <div className="dashbord-card__image">
        <WeatherLogo weather={weather} />
      </div>
      <p className="dashbord-card__address">杭州市 浙江省</p>
      <div className="dashbord-card__info">
        <div className="left-info">
          <Temperature temperature={temperature} size="medium"/>
          <div className="left-info__date">
            <span>周日,</span>
            <span>11 am</span>
          </div>
        </div>
        <div className="right-info">
          <div className="right-info__bar">强风</div>
          <div className="right-info__bar right-info__bar--small">多云</div>
        </div>
      </div>
      <div className="dashbord-card__btn" onClick={handleGoDetail}>详情</div>
    </div>
  )
}