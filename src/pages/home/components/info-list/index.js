import { useMemo } from 'react';
import { IMG_RAIN, IMG_HUMIDITY, IMG_WIND } from '../../../../constants';

export default function InfoList(props) {
  const { humidity, windpower = 0 } = props.weather || {};

  const list = useMemo(() => {
    return [
      {
        img: IMG_RAIN,
        text: '降水量',
        val: 0,
      },
      {
        img: IMG_HUMIDITY,
        text: '湿度',
        val: humidity,
      },
      {
        img: IMG_WIND,
        text: '风速',
        val: windpower,
      }
    ]
  }, [humidity, windpower]);

  return (
    <div className="dashbord-info-list">
      {
        list.map((item, key) => (
          <div className="dashbord-info-list__row" key={key}>
            <img alt="" src={item.img} />
            <span style={{ marginLeft: '10px' }}>{item.text}</span>
            <span style={{ flex: 1, textAlign: 'right' }}>{item.val}</span>
          </div>
        ))
      }
    </div>
  )
}