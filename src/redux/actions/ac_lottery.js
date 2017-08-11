import {AT_LOTTERY} from '../constants/action_types';

export function getLotteryResult ({time, lotteryResult}) {
    return {
        type: AT_LOTTERY.GET.RESULT,
        payload: {
            time,
            lotteryResult
        }
    }
}

export function initLotteryResult () {
    return {
        type: AT_LOTTERY.INIT.RESULT
    }
}