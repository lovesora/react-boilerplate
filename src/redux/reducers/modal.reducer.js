import {AT_MODAL} from '../constants/action_types';

export default (state = {}, action) => {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_MODAL.INIT_DATA: {
            let data = action.payload;
            if (data.award) {
                s.award = {...s.award, ...data.award}
            }
            return s;
        }
        case AT_MODAL.AWARD.TOGGLE: {
            s.award.isOpen = action.payload;
            return s;
        }
        case AT_MODAL.AWARD.SET_DATA: {
            s.award = {...s.award, ...action.payload};
            return s;
        }
        case AT_MODAL.DESC.TOGGLE: {
            s.desc = {...s.desc, ...action.payload};
            return s;
        }
        case AT_MODAL.CODE.TOGGLE: {
            s.code.isOpen = action.payload;
            return s;
        }
        case AT_MODAL.SHARE_END.TOGGLE: {
            s.shareEnd.isOpen = action.payload;
            return s;
        }
        case AT_MODAL.SHARE_ADD_NUM.TOGGLE: {
            s.shareAddNum = {...s.shareAddNum, ...action.payload};
            return s;
        }
        case AT_MODAL.AWARD_DESC.TOGGLE: {
            s.awardDesc = {...s.awardDesc, ...action.payload};
            return s;
        }
        case AT_MODAL.POP.TOGGLE: {
            s.pop = action.payload;
            return s;
        }
        default: {
            return state;
        }
    }
}