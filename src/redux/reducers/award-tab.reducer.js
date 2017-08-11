import {AT_TAB} from '../constants/action_types';

export default (state = {}, action) => {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_TAB.AWARD.ONCLICK: {
            s.attr.active = action.payload;
            return s;
        }
        case AT_TAB.AWARD.LIST.GET: {
            s.data[s.attr.tabType.noUse].data    = action.payload.noUse;
            s.data[s.attr.tabType.used].data     = action.payload.used;
            s.data[s.attr.tabType.expire].data   = action.payload.expire;
            return s;
        }
        default: {
            return state;
        }
    }
}