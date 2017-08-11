import {AT_LOTTERY} from '../constants/action_types';

export default (state = {}, action) => {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_LOTTERY.GET.RESULT: {
            return {...s, ...action.payload};
        }
        case AT_LOTTERY.INIT.RESULT: {
            s.lotteryResult = -1;
            return s;
        }
        default: {
            return state;
        }
    }
}