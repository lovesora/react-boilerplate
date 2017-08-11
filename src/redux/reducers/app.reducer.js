import {AT_APP} from '../constants/action_types';

export default (state = {}, action) => {
    let s = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case AT_APP.CONFIG.INIT: {
            s.initData = {...s.initData, ...action.payload};
            return s;
        }
        case AT_APP.CONFIG.GET: {
            s.activityAttrs             = {...s.activityAttrs, ...action.payload.activityAttrs};
            s.wechatShareInfos          = {...s.wechatShareInfos, ...action.payload.wechatShareInfos};
            s.awards                    = action.payload.awards;
            s.initData.campaignUserId   = action.payload.campaignUserId;
            return s;
        }
        case AT_APP.CONFIG.SET.WECHAT.SHARE_LINK: {
            s.wechatShareInfos.shareLink = action.payload.shareLink;
            return s;
        }
        default: {
            return state;
        }
    }
}