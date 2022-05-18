import './style.scss';

export default function Temperature(props) {
  const { temperature, size, gray } = props;

  return (
    <div className={`components-temperature components-temperature--${size} ${gray ? 'components-temperature--gray' : ''}`}>
      <span className="temp">{temperature}</span>
      <span className="mark">°C</span>
    </div>
  )
}