//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAward, toggleShareAddNum, togglePop, toggleShareEnd} from '../../redux/actions/ac_modal';
import {getLotteryResult, initLotteryResult} from '../../redux/actions/ac_lottery';
import {setAwardModalData} from '../../redux/actions/ac_modal';

//url
import url from '../../server/restful-api';

class RotaryLotterView extends React.Component {
    constructor (...args) {
        super(args);

        this.state = {
            running: false,
            animationName: '',
            duration: .2,
            startDuration: 1.5,
            midDuration: 1.5,
            stopDuration: 1,
            deg: 360,
            startDeg: 0,
            isOpenResultModal: true
        };
    }

    eventListener () {
        if (this.props.data.lotteryResult < 0) {
            this.setState({
                timingFunction: 'linear',
                count: this.state.count + 1,
                duration: this.state.midDuration,
            });
        } else {
            if (this.state.timingFunction != 'ease-out')
                this.stopRotate();
        }
    }
    
    componentDidMount () {
        setTimeout(() => {
            document.getElementById('rotaryContainer').addEventListener('webkitAnimationEnd', this.eventListener.bind(this));
            document.getElementById('rotaryContainer').addEventListener('animationend', this.eventListener.bind(this));
        }, 0);
    }

    startRotate () {
        if (this.state.running) {
            if (!this.state.isOpenResultModal)
                this.props.toggleShareEnd(true);
            return;
        }

        
        if (this.props.data.lotteryTime == 0) {
            this.props.toggleShareAddNum(true);
            return;
        }


        this.state.running = true;
        
        this.props.initLotteryResult();

        // JSON.stringify({
        //     orderId: this.props.initData.orderId,
        //     campaignId: this.props.initData.campaignId,
        //     campaignUserId:this.props.initData.campaignUserId
        // })

        let api = url.home.lottery.url;
        api += `?F-Session=${this.props.initData.token}`;
        fetch(api, {
            method:'POST',
            mode: 'cors',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `orderId=${this.props.initData.orderId}&campaignId=${this.props.initData.campaignId}&campaignUserId=${this.props.initData.campaignUserId}`
        })
        .then(r => r.json())
        .then(json => {
            switch (json.code) {
                case 0: {
                    let data = json.data;
                    let resultIndex = this.props.awards.map(v => v.id).indexOf(data.prizeId);

                    this.props.getLotteryResult({
                        time: data.balance,
                        lotteryResult: resultIndex
                    });

                    let awardModalData = {};
                    if (data.coupon) {
                        awardModalData.isWinning = true;
                        awardModalData.resultTitle = this.props.awards[resultIndex].title;
                        awardModalData.resultImg = this.props.awards[resultIndex].imgUrl;
                        awardModalData.resultConstrain = data.coupon.limitAmount;
                        awardModalData.resultExpire = data.coupon.expirationDate;
                    } else {
                        awardModalData.isWinning = false;
                    }
                    this.props.setAwardModalData(awardModalData);
                    break;
                }
                case 2502: {
                    this.props.toggleShareAddNum(true);
                    this.props.getLotteryResult({
                        time: this.props.data.lotteryTime,
                        lotteryResult: 0
                    });
                    this.setState({
                        isOpenResultModal: false,
                    });
                    break;
                }
                case 2503: {
                    this.props.toggleShareEnd(true);
                    this.props.getLotteryResult({
                        time: this.props.data.lotteryTime,
                        lotteryResult: 0
                    });
                    this.setState({
                        isOpenResultModal: false,
                    });
                    break;
                }
                case 2504: {
                    this.props.getLotteryResult({
                        time: this.props.data.lotteryTime,
                        lotteryResult: 0
                    });
                    this.setState({
                        isOpenResultModal: false,
                    });
                    this.props.togglePop(true, json.message);
                    break;
                }
                default: {
                    console.log(json);
                    this.props.togglePop(true,'活动配置异常！请联系工作人员。');
                }
            }
        })
        .catch(e => {
            console.log(e);
            this.props.togglePop(true,'活动配置异常！请联系工作人员。');
        })
        
        let styleSheet = document.styleSheets[0];

        let animationRotate = `animationRotate`;

        let keyframes =`@-webkit-keyframes animationRotate {
            from {-webkit-transform:rotate(${this.state.startDeg}deg);} 
            to {-webkit-transform:rotate(${this.state.deg + 360}deg);}
        }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        this.setState({
            animationName: animationRotate,
            count: 1,
            timingFunction: 'ease-in',
            duration: this.state.startDuration,
        });
    }

    stopRotate () {
        let styleSheet = document.styleSheets[0];

        let animationStop = `animationStop`;

        let length = this.props.awards.length;
        let deg = 360 / length;
        let side = 10;
        let dist = (this.props.data.lotteryResult) * deg + ((Math.random() * 100) % (deg - side)) + side/2 - Math.floor(deg / 2) + 360;
        let keyframes =`@-webkit-keyframes animationStop {
            from {-webkit-transform:rotate(0deg);} 
            to {-webkit-transform:rotate(${dist}deg);}
        }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        this.setState({
            animationName: animationStop,
            timingFunction: 'ease-out',
            duration: this.state.stopDuration,
            count: 1,
            startDeg: dist - 360
        });

        if (this.state.isOpenResultModal) {
            setTimeout(() => {
                this.state.running = false;
                this.props.toggleAward(true);
            }, this.state.stopDuration * 1000 + 200);
        }
    }

    render () {
        let style = {
            container: { 
                marginTop: '18rem',
                position: 'relative'
            },
            rotaryContainer: {
                position: 'relative',
            },
            bg: {
                container: {
                    display: 'flex',
                    justifyContent: 'center',
                    animationName: this.state.animationName,
                    animationTimingFunction: this.state.timingFunction,
                    animationDuration: `${this.state.duration}s`,
                    animationIterationCount: this.state.count,
                    animationDirection: 'normal',
                    animationFillMode: 'forwards'
                },
                rotary: {
                    width: '28rem',
                    height: '28rem'
                },
                pointer: {
                    width: '8rem',
                    height: '10rem',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4rem',
                    marginTop: '-6rem'
                }, 
            },
            award: {
                container: {
                    width: '5rem',
                    height: '6rem',
                    position: 'absolute',
                    right: '50%',
                    marginRight: '-2.5rem',
                    top: '3rem',
                    transform:'rotate(0)',
                    transformOrigin: '50% 11rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                text: {
                    color: '#B04971',
                    whiteSpace: 'nowrap',
                    margin: '.2rem'
                },
                img: {
                    height: '4rem',
                    maxWidth: '5rem'
                }
            },
            descBar: {
                container: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '4rem'
                },
                lotteryText: {
                    display: 'flex',
                    fontSize: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                },
                lotteryTime: {
                    fontSize: '4rem',
                    color: 'red',
                    margin: '0 .5rem'
                },
                couponImg: {
                    width: '2rem',
                    height: '2rem'
                }
            }
        }

        let awards = [];
        let length = this.props.awards.length;
        this.props.awards.map((v, k) => {
            awards.push(<div style={{...style.award.container, transform: `rotate(-${k*(360/length)}deg)`}}>
                <p style={style.award.text}>{v.title}</p>
                <img style={style.award.img} src={v.imgUrl}/>
            </div>);
        });

        return (<div style={style.container}>
            <div style={style.rotaryContainer}>
                <div id='rotaryContainer' style={style.bg.container}>
                <img style={style.bg.rotary} src={this.props.imgUrls.rotary}/>
                {awards}
                </div>
                <div style={style.bg.pointer} onClick={this.startRotate.bind(this)}>
                    <img src={this.props.imgUrls.pointer} width="100%" height="100%"/>
                </div>
            </div>
            <div style={style.descBar.container}>
                <img style={style.descBar.couponImg} src={this.props.imgUrls.leftCoupon}/>
                <span style={style.descBar.lotteryText}>您还剩<span style={style.descBar.lotteryTime}>{this.props.data.lotteryTime}</span>次抽奖机会</span>
                <img style={style.descBar.couponImg} src={this.props.imgUrls.rightCoupon}/>
            </div>
        </div>);
    }
}

let mapStateToProps = state => ({
    imgUrls: state.home.imgUrls,
    awards: state.appConfigs.awards,
    data: {
        lotteryTime: state.lottery.time,
        lotteryResult: state.lottery.lotteryResult
    },
    initData: state.appConfigs.initData
});

let mapDispathToProps = dispatch => bindActionCreators({toggleAward, toggleShareEnd, toggleShareAddNum, togglePop, initLotteryResult, getLotteryResult, setAwardModalData}, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(RotaryLotterView);