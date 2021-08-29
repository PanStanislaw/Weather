import React from 'react';
import MetrikCityPage from './pages/MetrikCityPage';
import LocationPage from './pages/LocationPage';
import { IWeather } from './interface';

function App() {
  const [all, setAll] = React.useState<IWeather[]>([]);
  const [search, setSearch] = React.useState<String>();
  const [view, setView] = React.useState<Boolean>(false);
  const [idItem, SetIdItem] = React.useState<number>(0);

  const toggle = (e: any) => {
    if (e.target.innerText === "Удалить"){
      setAll(all.filter((el, i, arr) => el !== arr[e.target.parentNode.id]));
      setSearch(e.target.value);
    }else {
    SetIdItem(Number(e.currentTarget.id));
    setView(!view);}
  };

  const onSerch = (e: any) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
      e.target.value = '';
    }
  };


  React.useEffect(() => {
    if (search) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=330216f9e3042b8a57a7865c3de67865`,
      )
        .then((resp) => (resp.ok ? resp : Promise.reject(resp)))
        .then((resp) => resp.json())
        .then((json) => {
          setAll([...all, json]);
        })
        .catch(() => alert('Название города не верно'));
    }
  }, [search]);

  return (
    <div className="App">
      <div className="wrapper">
        <img className="backgdoung-img" src="/image/day.png" alt="header" />
        {view ? (
          <MetrikCityPage toggle={toggle} weather={all} idItem={idItem} />
        ) : (
          <LocationPage
            onSerch={onSerch}
            weather={all}
            toggle={toggle}
          />
        )}
      </div>
    </div>
  );
}

export default App;
