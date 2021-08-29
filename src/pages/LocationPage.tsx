import React from 'react';
import { IWeather } from '../interface';

interface IPropsLocal {
  onSerch: (e: any) => void;
  weather: IWeather[];
  toggle: (e: any) => void;
}

const LocationPage = ({ onSerch, weather, toggle }: IPropsLocal) => {
  return (
    <div className="list">
      <h3>Location</h3>
      <input type="text" placeholder="Введите название города" onKeyPress={onSerch} />
      <img src="/image/icons/PlacesBlack.svg" alt="" />
      <div className="list--overflow">
        <ul>
          {weather.map((el, i) => {
            return (
              <>
                <li className="list--item" key={`${el.id}_${el}`} id={`${i}`} onClick={toggle}>
                  <span className="list--item-city">{`${el.name}, ${el.sys.country}`}</span>
                  <div className="list--item-temperature">
                    <span>
                      {Math.floor(el.main.temp - 273.15)}
                      <sup>o</sup>C
                    </span>
                  </div>
                  <button className="list--delete" onClick={toggle}>
                    Удалить
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LocationPage;
