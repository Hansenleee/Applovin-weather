import { useEffect, useState } from "react"
import Temperature from '../../../../components/temperature';
import { getFuture24Temp } from '../../../../services';

export default function TodayWeather() {
  const [todayList, setTodayList] = useState([]);

  useEffect(() => {
    getFuture24Temp().then((res) => setTodayList(res));
  }, []);

  return (
    <div className="detail-today">
      <span>Today</span>
      <img alt="" src="http://leebucket01.oss-cn-shanghai.aliyuncs.com/Statics/temporary/Group%20141(1).png" />
      <div className="detail-today__hours">
        {
          todayList.map((item, index) => (
            <div className="detail-today__hours__item" key={index}>{item.hour}</div>
          ))
        }
      </div>
      <div className="detail-today__trend">
        {
          todayList.map((item, index) => (
            <div className="detail-today__trend__item" key={index}>
              <Temperature temperature={item.temp} size="small" />
              <span>{item.hour}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}