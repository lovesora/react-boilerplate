//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAward} from '../../redux/actions/ac_modal';

class RotaryLotter extends React.Component {
    constructor (...args) {
        super(args);

        this.state = {
            isRotate: false,
            interval: 10,
            degStep: 2,
            deg: 0,
            stopTime: 100
        };
    }

    startRotate () {
        if (!this.state.isRotate) {
            this.setState({
                isRotate: true
            })

            setTimeout(function u() {
                this.setState({
                    deg: this.state.deg + this.state.degStep
                });
                
                if (this.state.interval < this.state.stopTime) {
                    setTimeout(u.bind(this), this.state.interval);
                } else {
                    this.setState({
                        isRotate: false
                    });
                }
            }.bind(this), this.state.interval);

            setTimeout(() => {
                this.stopRotate();
            }, 3000);
        }
    }

    stopRotate () {
        setTimeout(function u() {
            let interval = this.state.interval + 1;
            if (interval <= this.state.stopTime) {
                this.setState({
                    interval: interval
                });
                setTimeout(u.bind(this), Math.ceil(Math.random()*10));
            } else {
                setTimeout(() => {
                    this.setState({
                        interval: 10
                    });
                }, 500);
                this.props.toggleAward(true);
            }
        }.bind(this), Math.ceil(Math.random()*100));
    }
    
    render () {
        let style = {
            container: { 
                marginTop: '18rem',
                position: 'relative'
            },
            bg: {
                container: {
                    transform: 'rotate(' + this.state.deg + 'deg)',
                },
                rotary: {
                    width: '280px',
                    height: '280px'
                },
                pointer: {
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '50%',
                    top: '80px',
                    marginLeft: '-39px'
                }, 
            },
            award: {
                position: 'absolute',
                right: '50%',
                marginRight: '-30px',
                top: '30px',
                transform:'rotate(60deg)',
                transformOrigin: '50% 200%'
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

        for (let i of [0, 1, 2, 3, 4, 5]) {
            awards.push(<img style={{...style.award, transform: `rotate(${i*60}deg)`}} src={this.props.awards[i].imgUrl}/>)
        }
        
        return (<div style={style.container}>
            <div style={style.bg.container}>
                <img style={style.bg.rotary} src={this.props.imgUrls.rotary}/>
                {awards}
            </div>
            <div style={style.bg.pointer} onClick={this.startRotate.bind(this)}>
                <img src={this.props.imgUrls.pointer} width="80px"/>
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
        lotteryTime: state.lottery.time
    }
});

let mapDispathToProps = dispatch => bindActionCreators({toggleAward}, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(RotaryLotter);