import {AT_POST} from '../constants/action_types.js';

export function post(content) {
    return {
        type: AT_POST.POST,
        payload: content
    }
}
