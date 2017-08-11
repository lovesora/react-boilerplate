import {AT_TAB} from '../constants/action_types';
import {img} from '../../assets/index';

export function changeActiveTab (activeTab) {
    return {
        type: AT_TAB.AWARD.ONCLICK,
        payload: activeTab
    }
}

export function getAwardsListData (data) {
    let noUse = [], used = [], expire = [];
    data.map(v => {
        let item = {};
        switch (v.consumptionType) {
            case 'LIMIT': {
                item.discountType = 0;
                item.title = v.couponPrice;
                break;
            }
            case 'DISCOUNT': {
                item.discountType = 1
                item.title = v.discountRate;
                break;
            }
        }
        item.constrain = v.limitAmount;
        if (null === v.channel) {
            item.type = '通用';
        } else {
            switch (v.channel.toLocaleLowerCase()) {
                case 'online': {
                    item.type = '商城';
                    break;
                }
                case 'offline': {
                    item.type = '门店';
                    break;
                }
                default: {
                    item.type = 'Error';
                }
            }
        }
        item.content = v.title;
        // item.content = `全部都可以用时：显示“所有门店通用”`;
        item.couponDescription = v.couponDescription;
        item.desc = ``;
        if (!v.storeLimits || v.storeLimits.length == 0) {
        } else {
            if (v.storeLimits.length == 1) {
                if (v.storeLimits[0].id == 0) {

                } else {
                    item.desc = `仅限${v.storeLimits[0].name}使用`;
                }
            } else {
                item.desc = `限部分门店使用`;
            }
        }
        item.expireDesc = '有效期至';
        item.expire = v.expirationDate;
        item.usingType = 1;
        item.iconUrl = img.awardList.icon.rightMid;

        switch (v.status) {
            case 1: {
                noUse.push(item);
                break;
            }
            case 2: {
                used.push(item);
                break;
            }
            case 4: {
                expire.push(item);
                break;
            }
        }
    });

    return {
        type: AT_TAB.AWARD.LIST.GET,
        payload: {
            noUse,
            used,
            expire
        }
    }
}