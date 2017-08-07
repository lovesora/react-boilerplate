import {createStore} from 'redux';
import Reducers from '../reducer/index.js';
import initialState from './initial-state.js';

// dev
export default () => createStore(Reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// prod
// export default () => createStore(Reducers, initialState);
