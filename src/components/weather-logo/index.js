import { useMemo } from 'react';
import { WEATHER_TYPE_IMG } from '../../constants';

export default function WeatherLogo(props) {
  const { weather, width } = props;
  const formatWidth = useMemo(() => width || '122px', [width]);
  const weatherLogo = useMemo(() => {
    const arrays = WEATHER_TYPE_IMG[weather];

    return arrays ? arrays[new Date().getHours() >= 18 ? 1 : 0] : ''
  }, [weather]);

  return (
    <img style={{ width: formatWidth }} alt="" src={weatherLogo}/>
  )
}