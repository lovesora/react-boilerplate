import {createStore} from 'redux';
import Reducers from '../reducer/index.js';
import initialState from './initial-state.js';

import conf from '../../config/redux.config';

export default () => createStore(
    Reducers,
    initialState,
    conf.dev
        // dev
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // prod
        : null
);
