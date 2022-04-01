import {createStore} from 'redux';
import rootReducer from './reducers/index';

// now this is global centralized state

const store = createStore(rootReducer);
export default store;
