import {AT_HOME} from '../constants/action_types';

export function setHomeImg ({bg}) {
    return {
        type: AT_HOME.SET.BACKGROUND,
        payload: {
            bg
        }
    }
}