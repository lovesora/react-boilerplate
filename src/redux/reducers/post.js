import {AT_POST} from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_POST.POST: {
            return {content: action.payload.content};
        }
        default:
            return state;
    }
}
