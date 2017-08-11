export const AT_APP = {
    CONFIG: {
        INIT: 'AT_APP_INIT_CONFIG',
        GET: 'AT_APP_GET_CONFIG',
        SET: {
            WECHAT: {
                SHARE_LINK: 'AT_APP_CONFIG_SET_WECHAT_SHARE_LINK'
            }
        }
    }
}

export const AT_HOME = {
    SET: {
        BACKGROUND: 'AT_HOME_SET_BACKGROUND'
    }

}

export const AT_MODAL = {
    INIT_DATA: 'AT_MODAL_INIT_DATA',
    //抽奖结果
    AWARD: {
        TOGGLE: 'AT_MODAL_AWARD_TOGGLE',
        SET_DATA: 'AT_MODAL_SET_DATA'
    },
    //活动介绍
    DESC: {
        TOGGLE: 'AT_MODAL_DESC_TOGGLE'
    },
    //关注我们二维码
    CODE: {
        TOGGLE: 'AT_MODAL_CODE_TOGGLE'
    },
    //抽奖达到上限，无法通过分享增加次数
    SHARE_END: {
        TOGGLE: 'AT_MODAL_SHARE_END_TOGGLE'
    },
    //分享可增加抽奖次数
    SHARE_ADD_NUM: {
        TOGGLE: 'AT_MODAL_SHARE_ADD_NUM_TOGGLE'
    },
    //优惠券列表当中“详细信息“按钮弹出框
    AWARD_DESC: {
        TOGGLE: 'AT_MODAL_AWARD_DESC_TOGGLE'
    },
    //错误信息弹出框
    POP: {
        TOGGLE: 'AT_MODAL_POP_TOGGLE'
    }
}

export const AT_TAB = {
    AWARD: {
        ONCLICK: 'AT_TAB_AWARD_ONCLICK',
        LIST: {
            GET: 'AT_TAB_AWARD_LIST_GET'
        }
    }
}

export const AT_LOTTERY = {
    GET: {
        RESULT: 'AT_LOTTERY_GET_RESULT'
    },
    INIT: {
        RESULT: 'AT_LOTTERY_INIT_RESULT'
    }
}