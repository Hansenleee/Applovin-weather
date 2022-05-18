import { useMemo } from 'react';
import Temperature from '../../../../components/temperature';
import { IMG_RAIN_COLORFUL, IMG_HUMIDITY_COLORFUL, IMG_WIND_COLORFUL } from '../../../../constants';

export default function InfoTags(props) {
  const { temperature, humidity, windpower = 0 } = props.weather || {};
  const tags = useMemo(() => {
    return [
      {
        img: IMG_RAIN_COLORFUL,
        val: 0,
      },
      {
        img: IMG_HUMIDITY_COLORFUL,
        val: humidity,
      },
      {
        img: IMG_WIND_COLORFUL,
        val: windpower,
      }
    ]
  }, [humidity, windpower]);

  return (
    <div className="detail-tags">
      <Temperature temperature={temperature} size="big" />
      <div className="detail-tags__list">
        {
          tags.map((tag, index) => (
            <div className="detail-tags__list__item" key={index}>
              <img alt="" src={tag.img} />
              <span>{tag.val}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
