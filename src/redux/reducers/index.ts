import { combineReducers } from "redux";
import searchReducer from './search';
import weatherReducer from './weather'


const rootReducer = combineReducers({
    search: searchReducer,
    weather: weatherReducer
})

export default rootReducer;