import axios from 'axios';

export const setWeather = (items: []) => ({
    type: 'SET_WEATHER',
    payload: items,
});

export const deleteCountry = (id: string) => ({
    type: 'DELETE_COUNTRY',
    payload: id
})

export const fetchCountry = (name: string) => (dispatch : any) => {
    if(name)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=330216f9e3042b8a57a7865c3de67865`
      )
      .then(({ data }) => {
        dispatch(setWeather(data));
      })
      .catch(() => { 
        alert('Данного горада не существует'); 
      })
  };

