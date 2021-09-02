const initialState = {
    items: [],
    id: ''
  };
  
  const weather = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_WEATHER':{
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
      case 'DELETE_COUNTRY':{
        return {
          ...state,
          id: action.payload,
          items: state.items.filter((el: any) => el.name !== action.payload)
        }
      }
      default:
        return state;
    }
  };
  export default weather;
  