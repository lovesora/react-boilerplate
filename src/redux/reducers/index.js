import { combineReducers } from 'redux';
import snackbar from './snackbar.js';
import post from './post.js';

export default combineReducers({snackbar, post});
