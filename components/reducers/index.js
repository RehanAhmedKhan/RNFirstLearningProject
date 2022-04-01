import incDecNumber from './myReducer';
import {message, status, calls, main} from './messageReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  // incDecNumber,
  main,
  // message,
  // status,
  // calls,
});
export default rootReducer;
