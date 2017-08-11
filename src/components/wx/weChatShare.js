//wechat
import wx from '../../../node_modules/weixin-js-sdk';

class WeChatShare {
    constructor (data) {
        this.data = data;
    }

    config (url = 'http://sandbox.food.petkit.com/api/wechat/getSignature') {
        fetch(url + '?url='+location.href.replace(location.hash,''), {
            mode: 'cors',
            method: 'GET'
        }).then(r => r.json()).then(json => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: json.appId, // 必填，公众号的唯一标识
                timestamp: json.timestamp, // 必填，生成签名的时间戳
                nonceStr: json.nonceStr, // 必填，生成签名的随机串
                signature: json.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(() => {
                this.regShareList();
            });
        }).catch(e => {
            console.log(e);
        });
    }

    regShareList () {
        let data = this.data;
        console.log(data);
        wx.onMenuShareTimeline({
            title: data.shareTitle, // 分享标题
            link: data.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.shareIcon, // 分享图标
            success: () => { 
                data.fnSuccess();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                data.fnCancel();
            }
        });
        wx.onMenuShareAppMessage({
            title: data.shareTitle, // 分享标题
            desc: data.shareSubtitle, // 分享描述
            link: data.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.shareIcon, // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                data.fnSuccess();
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                data.fnCancel();
            }
        });
        wx.onMenuShareQQ({
            title: data.shareTitle, // 分享标题
            desc: data.shareSubTitle, // 分享描述
            link: data.shareLink, // 分享链接
            imgUrl: data.shareIcon, // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                data.fnSuccess();
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                data.fnCancel();
            }
        });
        wx.onMenuShareWeibo({
            title: data.shareTitle, // 分享标题
            desc: data.shareSubTitle, // 分享描述
            link: data.shareLink, // 分享链接
            imgUrl: data.shareIcon, // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                data.fnSuccess();
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                data.fnCancel();
            }
        });
        wx.onMenuShareQZone({
            title: data.shareTitle, // 分享标题
            desc: data.shareSubTitle, // 分享描述
            link: data.shareLink, // 分享链接
            imgUrl: data.shareIcon, // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                data.fnSuccess();
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                data.fnCancel();
            }
        });
    }
}

export default WeChatShare;