import React from 'react';
import MetrikCityPage from './pages/MetrikCityPage';
import LocationPage from './pages/LocationPage';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './redux/actions/search';
import { fetchCountry, deleteCountry } from './redux/actions/weather';

function App() {
  const dispatch = useDispatch();
  const search = useSelector(({ search }: any) => search.value);
  const [view, setView] = React.useState<Boolean>(false);
  const [idItem, setIdItem] = React.useState<number>(0);

  const toggle = (e: any) => {
    if (e.target.innerText === 'Удалить') {
      dispatch(deleteCountry(e.target.name));
      dispatch(setSearch(e.target.value));
    } else {
      setIdItem(Number(e.currentTarget.id));
      setView(!view);
    }
  };

  const onSerch = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(setSearch(e.target.value));
      e.target.value = '';
    }
  };

  React.useEffect(() => {
    dispatch(fetchCountry(search));
  }, [search]);

  return (
    <div className="App">
      <div className="wrapper">
        <img className="backgdoung-img" src="/image/day.png" alt="header" />
        {view ? (
          <MetrikCityPage toggle={toggle} idItem={idItem} />
        ) : (
          <LocationPage onSerch={onSerch} toggle={toggle} />
        )}
      </div>
    </div>
  );
}

export default App;
