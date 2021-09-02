import React from 'react';
import { IWeather } from '../interface';
import { useDispatch, useSelector } from 'react-redux';

interface IPropsLocal {
  onSerch: (e: any) => void;
  toggle: (e: any) => void;
}

const LocationPage = ({ onSerch, toggle }: IPropsLocal) => {
  const weather: IWeather[] = useSelector(({weather} : any) => weather.items)

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
                  <button className="list--delete" name={`${el.name}`} onClick={toggle}>
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
