import {AT_APP} from '../constants/action_types';


export function initConfig ({campaignId, orderId, token}) {
    return {
        type: AT_APP.CONFIG.INIT,
        payload: {campaignId, orderId, token}
    };
}

export function getConfig (data) {
    let activityAttrs = {};
    activityAttrs.title = data.campaignBasic.title;
    activityAttrs.description = data.campaignBasic.description;
    activityAttrs.beginTime = data.campaignBasic.beginTime;
    activityAttrs.endTime = data.campaignBasic.endTime;
    
    let wechatShareInfos = {};
    wechatShareInfos.shareIcon = data.campaignBasic.shareIcon;
    wechatShareInfos.shareTitle = data.campaignBasic.shareTitle;
    wechatShareInfos.shareSubtitle = data.campaignBasic.shareSubtitle

    let awards = [];
    data.prizes.map(v => {
        awards.push({
            id: v.id,
            title: v.title,
            imgUrl: v.image
        });
    });

    let campaignUserId = data.luckyDrawUserInfo.campaignUserId;
    
    return {
        type: AT_APP.CONFIG.GET,
        payload: {
            activityAttrs,
            wechatShareInfos,
            awards: awards,
            campaignUserId
        }
    };
}

export function setWechatShareLink (shareLink) {
    return {
        type: AT_APP.CONFIG.SET.WECHAT.SHARE_LINK,
        payload: {shareLink}
    };
}