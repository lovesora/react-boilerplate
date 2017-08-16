import {AT_POST} from '../constant/action-types';

export function setPostId (id) {
    return {
        type: AT_POST.ID.SET,
        payload: id,
    };
}