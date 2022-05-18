import { get } from '../utils/http';

const KEY = '1bc7cd5d9f62b610161eeb206b5f4d47';
const SERVICE_CACHE = {};

// 获取当天天气
export const getDayWeather = () => {
  if (SERVICE_CACHE.weather) {
    return Promise.resolve(SERVICE_CACHE.weather)
  }

  if (SERVICE_CACHE.promise) {
    return SERVICE_CACHE.promise;
  }

  SERVICE_CACHE.promise = get(`https://restapi.amap.com/v3/weather/weatherInfo?city=330100&key=${KEY}`)
    .then((res) => {
      const { status, data } = res;

      SERVICE_CACHE.promise = undefined;

      if (status === 200) {
        SERVICE_CACHE.weather = data.lives[0];

        return SERVICE_CACHE.weather;
      }
    });

  return SERVICE_CACHE.promise;
}

// 获取未来 24 小时温度
// tips: 暂时没找到 API，先 mock 代替
export const getFuture24Temp = () => {
  return getDayWeather().then((res) => {
    const { temperature } = res;
    const nowHour = new Date(Date.now()).getHours();

    return Array(24).fill().map((item, index) => {
      const hour = (nowHour + index) % 24
      return {
        hour: `${hour} ${hour > 12 ? 'pm' : 'am'}`,
        temp: (temperature + index) % 36
      }
    });
  })
}

// 获取未来 7 天天气
export const getFutureDayWeather = () => {
  return get(`https://restapi.amap.com/v3/weather/weatherInfo?city=330100&key=${KEY}&extensions=all`)
  .then((res) => {
    const { status, data } = res;

    if (status === 200) {

      return data.forecasts[0].casts;
    }
  })
}