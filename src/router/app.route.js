//global style
import '../styles/style.scss';

//Material UI
  //tap event
import injectTapEventPlugin from 'react-tap-event-plugin';

  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


//react-router
import {browserHistory} from 'react-router';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initConfig, getConfig, setWechatShareLink} from '../redux/actions/ac_app';
import {togglePop, toggleShareAddNum, toggleDesc} from '../redux/actions/ac_modal';
import {setHomeImg} from '../redux/actions/ac_home';
import {getLotteryResult} from '../redux/actions/ac_lottery';

//ajax
import url from '../server/restful-api';

//routes
import {url as URL} from '../router/routes';

import WeChatShare from '../components/wx/weChatShare';


class AppRoute extends React.Component {
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
                        time: this.props.lotteryTime + this.props.shareAddNum
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
    
    configApp () {
        let api = url.config.get.url.replace('{campaignId}', this.props.campaignId);
        api += `?orderId=${this.props.orderId}&token=${this.props.token}&F-Session=${this.props.token}`;
        fetch(api, {
            method: url.config.get.type
        })
        .then(response => response.json())
        .then(json => {
            if (0 == json.code) {
                document.title = json.data.campaignBasic.title;
                this.props.getConfig(json.data);
                this.props.getLotteryResult({
                    time: json.data.luckyDrawUserInfo.balance,
                    lotteryResult: -1
                });
                this.props.setHomeImg({
                    bg: json.data.campaignBasic.backgroundImage
                });
                this.props.toggleShareAddNum(false, json.data.limits.shareNumber);
                this.props.toggleDesc(false, json.data.campaignBasic.description);
                setTimeout(() => {
                    new WeChatShare({...{...this.props.wechatShareInfos, ...{
                            fnSuccess: () => {
                                this.addLotteryNum();
                                this.props.togglePop(true,'分享成功!');
                            },
                            fnCancel: () => {
                                this.props.togglePop(true,'分享已取消!');
                            }
                        }}}
                    ).config();
                }, 0);
            } else if (2501 == json.code) {
                this.props.togglePop(true,'活动已失效！');
            } else  {
                console.log(json);
                this.props.togglePop(true,'活动配置异常！请联系工作人员。');
            }
        })
        .catch(e => {
            console.log(e);
            this.props.togglePop(true,'活动配置异常！请联系工作人员。');
        });
    }

    dealQuery () {
        let query = this.props.location.query;
        if (query.campaignId && query.orderId && query.token && query.shareLink) {
            this.props.initConfig({
                campaignId: query.campaignId,
                orderId: query.orderId,
                token: query.token
            });
            this.props.setWechatShareLink(query.shareLink);
            setTimeout(() => {
                this.configApp();
            }, 0);
            browserHistory.push(URL.home);
        }
    }
    
    componentWillMount () {
        this.dealQuery();
    }

    render () {
        return <div>
            <ReactCSSTransitionGroup
                transitionName="fadeWrapper"
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }
            >
                <div
                    key={ this.props.location.pathname }
                    style={ {position: 'absolute', width: '100%', height: '100%'} }
                >
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}


let mapStateToProps = state => ({...state.appConfigs.initData,
    wechatShareInfos: state.appConfigs.wechatShareInfos,
    lotteryTime: state.lottery.time,
    shareAddNum: state.modal.shareAddNum.num,
    documentTitle: state.appConfigs.activityAttrs.title
});


let mapDispatchToProps = dispatch => bindActionCreators({initConfig, getConfig, togglePop, toggleDesc, toggleShareAddNum, getLotteryResult, setWechatShareLink, setHomeImg}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
