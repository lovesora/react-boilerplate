import url from '../restful-api';

import {initConfig, getConfig, setWechatShareLink} from '../../redux/actions/ac_app';
import {togglePop, toggleShareAddNum, toggleDesc} from '../../redux/actions/ac_modal';
import {setHomeImg} from '../../redux/actions/ac_home';
import {getLotteryResult} from '../../redux/actions/ac_lottery';

export default class ConfigFetch {
    init (campaignId, orderId, token) {
        let api = url.config.get.url.replace('{campaignId}', campaignId);
        api += `?orderId=${orderId}&token=${token}&F-Session=${token}`;
        fetch(api, {
            method: url.config.get.type
        })
        .then(response => response.json())
        .then(json => {
            if (0 == json.code) {
                document.title = json.data.campaignBasic.title;
                getConfig(json.data);
                getLotteryResult({
                    time: json.data.luckyDrawUserInfo.balance,
                    lotteryResult: -1
                });
                setHomeImg({
                    bg: json.data.campaignBasic.backgroundImage
                });
                toggleShareAddNum(false, json.data.limits.shareNumber);
                toggleDesc(false, json.data.campaignBasic.description);
                setTimeout(() => {
                    new WeChatShare({...{...wechatShareInfos, ...{
                            fnSuccess: () => {
                                this.addLotteryNum();
                                togglePop(true,'分享成功!');
                            },
                            fnCancel: () => {
                                togglePop(true,'分享已取消!');
                            }
                        }}}
                    ).config();
                }, 0);
            } else if (2501 == json.code) {
                togglePop(true,'活动已失效！');
            } else  {
                console.log(json);
                togglePop(true,'活动配置异常！请联系工作人员。');
            }
        })
        .catch(e => {
            console.log(e);
            togglePop(true,'活动配置异常！请联系工作人员。');
        });
    }

    addLotteryNum () {
        let api = url.wechat.shareEnd.url;
        api += `?F-Session=${this.props.token}`;
        fetch(api, {
            method:'POST',
            mode: 'cors',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `orderId=${this.props.orderId}&campaignId=${this.props.campaignId}&campaignUserId=${this.props.campaignUserId}`
        })
        .then(r => r.json())
        .then(json => {
            //用户分享后增加抽奖次数成功
            switch (json.code) {
                case 0: {
                    this.props.getLotteryResult({
                        time: json.data.balance
                    });
                    console.log(json);
                    break;
                }
                default: {
                    console.log(json);
                    this.props.togglePop(true,'活动配置异常！请联系工作人员。');
                }
            }
        })
        .catch(e => {
            //用户分享后增加抽奖次数失败
            console.log(e);
            this.props.togglePop(true,'数据操作有误！');
        })
    }
    
}