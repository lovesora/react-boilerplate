import {img} from '../../assets/index';

export default {
    appConfigs: {
        initData: {
            //活动id
            campaignId: -1,
            campaignUserId: -1,
            //订单id
            orderId: '-1',
            //微信token
            token: '-1'
        },
        //活动属性
        activityAttrs: {
            //活动标题
            title:'',
            //html文案内容
            description:'',
            //活动开始时间
            beginTime:'',
            //活动结束时间
            endTime:''

        },
        //微信分享内容
        wechatShareInfos: {
            //分享显示的图标url
            shareIcon:'',
            //分享的标题
            shareTitle:'',
            //分享的子标题
            shareSubtitle:'',
            //分享的链接
            shareLink: ''
        },
        //奖品列表
        awards: [],
    },
    //抽奖页面
    home: {
        //背景图片
        imgUrls: {
            //背景图片url
            bg: '',
            //转盘url
            rotary: img.bg.turntable,
            //转盘指针url
            pointer: img.bg.lotteryButton,
            //底部左侧红包图片url
            leftCoupon: img.icon.leftCoupon,
            //底部右侧红包图片url
            rightCoupon: img.icon.rightCoupon,
        },
        //底部图标
        iconUrls: {
            //左侧帮助图标url
            desc: img.icon.btnLotteryHelp,
            //右侧查看优惠券图标url
            award: img.icon.btnGift,
        },
    },
    //用户抽奖需要用到的数据
    lottery: {
        //当前剩余抽奖次数
        time: 0,
        //抽奖结果在appConfig.awards中的索引
        lotteryResult: -1,
        //是否中奖 true: 中奖 false: 没中奖
        isWinning: true,
        //结果图片url 中奖与未中奖共享字段
        resultImg: '',
        //中奖过后的显示的提示文本
        resultText: '恭喜你获得了',
        //奖品标题
        resultTitle: '¥5 - Kitcat',
        //奖品的描述信息
        resultDesc: `满200可用
有效期至：2017.07.31
请到各大小佩宠物线下门店消费使用`
    },
    //模态框数据
    modal: {
        //用户点击抽奖后弹出的结果界面
        award: {
            //是否显示模态框
            isOpen: false,
            //是否中奖 true: 中奖 false: 没中奖
            isWinning: false,
            //结果图片url 中奖与未中奖共享字段
            resultContainer: img.modal.awardBg,
            resultImg: '',
            resultThanksImg: img.award.resultThanks,
            //中奖过后的显示的提示文本
            resultText: '恭喜你获得了',
            //奖品标题
            resultTitle: '',
            //奖品的描述信息
            resultConstrain: '',
            resultExpire: '',
            resultDesc: `请到各大小佩宠物线下门店消费使用`
        },
        //首页左侧图标
        desc: {
            isOpen: false,
            //活动说明
            text: ''
        },
        //关注我们页面
        code: {
            isOpen: false,
            //显示的提示文本
            text: '长按指纹 识别二维码',
            //二维码图片url
            codeUrl: img.code.code,
            //提示长按识别二维码的图片url
            codeHintUrl: img.code.hint,
            //关闭页面的图片url
            codeCloseUrl: img.code.close,
        },
        //微信分享结束后不能通过分享再增加抽奖次数的提示界面
        shareEnd: {
            isOpen: false,
            //箭头图片url
            arrowImgUrl: img.modal.shareEnd,
            //提示的文本
            text: `您的抽奖次数已达上限！
点击“右上角”
分享给好友或者朋友圈！
看看朋友们的手气！`
        },
        //微信分享增加抽奖次数的界面
        shareAddNum: {
            isOpen: false,
            //箭头图片url
            arrowImgUrl: img.modal.addLottery,
            //提示的文本
            text: `再获得N次抽奖机会！`,
            //分享后会增加的抽奖次数
            num: 2
        },
        //优惠券详细信息界面
        awardDesc: {
            isOpen: false,
            //优惠券文本信息
            text: ``
        },
        pop: {
            isOpen: false,
            text: ''
        },
        loading: {
            isOpen: true,
        }
    },
    //优惠券列表数据
    awardTab: {
        attr: {
            active: 0,
            tabType: {
                noUse: 0,
                used: 1,
                expire: 2
            },
            uiType: {
                one: {
                    leftBgUrl: img.awardList.one.leftBgUrl,
                    rightBgUrl: img.awardList.one.rightBgUrl,
                },
                two: {
                    leftBgUrl: img.awardList.two.leftBgUrl,
                    rightBgUrl: img.awardList.two.rightBgUrl,
                },
                three: {
                    leftBgUrl: img.awardList.three.leftBgUrl,
                    rightBgUrl: img.awardList.three.rightBgUrl,
                }
            }
        },
        data: [{
            name: '未使用',
            uiType: 0,
            data: []
        }, {
            name: '已使用',
            uiType: 1,
            data: []
        }, {
            name: '已过期',
            uiType: 2,
            data: []
        }]
    },

}
