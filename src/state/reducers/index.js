import { combineReducers } from 'redux';
import mainState from './mainStateReducer';
import stops from './stops';

const reducers = combineReducers({
  mainState,
  stops,
})

export default reducers;
