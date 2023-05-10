import { combineReducers } from 'redux';
import weather from './weather';

const rootReducer = combineReducers(
    {
        weather: weather
    }
)
export default rootReducer;