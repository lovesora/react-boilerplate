import {AT_HOME} from '../constants/action_types';

export default (state = {}, action) => {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_HOME.SET.BACKGROUND: {
            s.imgUrls = {...s.imgUrls, ...action.payload};
            return s;
        }
        default: {
            return state;
        }
    }
};