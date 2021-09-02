const initialState = {
  value: '',
};

const search = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default search;
