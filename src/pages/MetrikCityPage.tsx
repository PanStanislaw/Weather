import React from 'react';
import { IWeather } from '../interface';

interface IPropsMetrix {
  idItem: number | undefined;
  weather: IWeather[];
  toggle: (e: any) => void;
}

const weekDay = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MetrikCityPage = ({ weather, toggle, idItem = 0 }: IPropsMetrix) => {
  const icon = weather[0].weather[0].icon;
  const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
  const celsium = (num: number): number => {
    return Math.floor(num - 273.15);
  };

  const time = (num: number, el: string) => {
    const date = new Date(num);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateWeek = weekDay[date.getDay()];
    const years = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const PM = hours > 12 ? hours - 12 : hours;
    switch (el) {
      case 'dat':
        return `${dateWeek}, ${day} ${month} ${years}`;
        break;
      case 'sun':
        return `${PM}:${minutes}`;
        break;
      case 'dt':
        return `${hours}h ${minutes}m`;
        break;
      default:
        return `0`;
    }
  };

  return (
    <div className="content">
      <div className="header">
        <div className="header__left">
          <span className="header__left-date">{time(weather[idItem].dt, 'dat')}</span>
          <span className="header__left-time">{`${time(weather[idItem].dt, 'sun')}`}PM</span>
        </div>
        <div className="header__rigth">
          <div className="header__rigth--places" onClick={toggle}>
            <span className="header__rigth--places-text">{`${weather[idItem].name}, ${weather[idItem].sys.country}`}</span>
            <img src="/image/icons/Places.svg" alt="Place" />
          </div>
        </div>
      </div>
      <div className="row__first">
        <div className="row__first-weather">
          <img src={iconUrl} alt="weather" />
          <div>
            <span className="row__first-weather">{weather[idItem].weather[0].main}</span>
          </div>
        </div>
        <div className="row__first-number--temperature">
          <span>{celsium(weather[idItem].main.temp)}</span>
          <img src="/image/icons/Celsium.svg" alt="celsium" />
        </div>
        <div className="row__first-difference--temperature">
          <div className="row__first-difference--temperature-up">
            <span>{celsium(weather[idItem].main.temp_min)}</span>
            <img
              className="row__first-difference--temperature-up-celsium"
              src="/image/icons/Celsium.svg"
              alt="celsium"
            />
            <img
              className="row__first-difference--temperature-up-arrow"
              src="/image/icons/Up.svg"
              alt="up"
            />
          </div>
          <div className="row__first-difference--temperature-down">
            <span>{celsium(weather[idItem].main.temp_max)}</span>
            <img
              className="row__first-difference--temperature-up-celsium"
              src="/image/icons/Celsium.svg"
              alt="celsium"
            />
            <img
              className="row__first-difference--temperature-up-arrow"
              src="/image/icons/Down.svg"
              alt="down"
            />
          </div>
        </div>
      </div>
      <div className="row__second">
        <div className="row__second-wrapper">
          <div className="row__second-humidity">
            <img src="/image/icons/Humidity.svg" alt="Humidity" />
            <div className="row__second-humidity__value">
              <span>{weather[idItem].main.humidity}</span>
              <span>%</span>
            </div>
            <span className="row__second-humidity__text">Humidity</span>
          </div>
          <div className="row__second-pressure">
            <img src="/image/icons/Pressure.svg" alt="Pressure" />
            <div className="row__second-pressure__value">
              <span>{weather[idItem].main.pressure}</span>
              <span>mBar</span>
            </div>
            <span className="row__second-pressure__text">Pressure</span>
          </div>
          <div className="row__second-wind">
            <img src="/image/icons/Wind.svg" alt="Wind" />
            <div className="row__second-wind__value">
              <span>{weather[idItem].wind.speed}</span>
              <span>km/h</span>
            </div>
            <span className="row__second-wind__text">Wind</span>
          </div>
        </div>
      </div>
      <div className="row__third">
        <div className="row__third-wrapper">
          <div className="row__third-sunrise">
            <img src="/image/icons/Sunrise.svg" alt="Humidity" />
            <div className="row__third-sunrise__value">
              <span>{time(weather[idItem].sys.sunrise, 'sun')}</span>
              <span>AM</span>
            </div>
            <span className="row__third-sunrise__text">Sunrise</span>
          </div>
          <div className="row__third-sunset">
            <img src="/image/icons/Sunset.svg" alt="Pressure" />
            <div className="row__third-sunset__value">
              <span>{time(weather[idItem].sys.sunset, 'sun')}</span>
              <span>PM</span>
            </div>
            <span className="row__third-sunset__text">Sunset</span>
          </div>
          <div className="row__third-daytime">
            <img src="/image/icons/Daytime.svg" alt="Wind" />
            <div className="row__third-daytime__value">
              <span>{time(weather[idItem].dt, 'dt')}</span>
            </div>
            <span className="row__third-daytime__text">Daytime</span>
          </div>
        </div>
      </div>
      {/* <div className="row__fourth">
              <div className="row__fourth--card">
              <div className="row__fourth-daytime">
                  <img src="/image/icons/Daytime.svg" alt="Wind" />
                  <div className="row__fourth-daytime__value">
                    <span>23</span><span>km/h</span>
                  </div>
                  <span className="row__fourth-daytime__text">Daytime</span>
                </div>
              </div>
              <div className="row__fourth--card">
              <div className="row__fourth-daytime">
                  <img src="/image/icons/Daytime.svg" alt="Wind" />
                  <div className="row__fourth-daytime__value">
                    <span>23</span><span>km/h</span>
                  </div>
                  <span className="row__fourth-daytime__text">Daytime</span>
                </div>
              </div>
              <div className="row__fourth--card">
              <div className="row__fourth-daytime">
                  <img src="/image/icons/Daytime.svg" alt="Wind" />
                  <div className="row__fourth-daytime__value">
                    <span>23</span><span>km/h</span>
                  </div>
                  <span className="row__fourth-daytime__text">Daytime</span>
                </div>
              </div>
            </div> */}
    </div>
  );
};

export default MetrikCityPage;
