import {combineReducers} from 'redux';
import APPReducer from './app.reducer';
import HomeReducer from './home.reducer';
import ModalReducer from './modal.reducer';
import LotteryReducer from './lottery.reducer';
import AwardTabReducer from './award-tab.reducer';

export default combineReducers({
    appConfigs: APPReducer,
    home: HomeReducer,
    modal: ModalReducer,
    lottery: LotteryReducer,
    awardTab: AwardTabReducer
});
