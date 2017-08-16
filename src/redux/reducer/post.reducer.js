import {AT_POST} from '../constant/action-types';


export default function (state = {}, action) {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_POST.ID.SET: {
            s.id = action.payload;
            return s;
        }
        default: {
            return state;
        }
    }
}