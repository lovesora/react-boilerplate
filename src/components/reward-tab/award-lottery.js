//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAwardDesc} from '../../redux/actions/ac_modal';

class AwardLottery extends React.Component {
    render () {
        let style = {
            container: {
                height: '6.75rem',
                margin: '1rem 1rem 0 1rem',
                display: 'flex'
            },
            left:{
                container: {
                    width: '10rem',
                    background: 'url(' + this.props.attr.uiType.one.leftBgUrl + ') no-repeat',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 1rem'
                },
                title: {
                    fontSize: '3.5rem',
                    color: '#fff'
                },
                titleUnit: {
                    fontSize: '2rem'
                },
                constrain: {
                    fontSize: '1.5rem',
                    color: '#fff',
                    whiteSpace: 'nowrap'
                }
            } ,
            right: {
                container: {
                    flexGrow: '1',
                    margin: '0 .375rem', 
                    display: 'flex',
                    flexDirection: 'column'
                },
                top: {
                    container: {
                        flexGrow: '1',
                    },
                    type: {
                        backgroundColor: '#f36209',
                        color: '#fff',
                        padding: '0 .5rem',
                        margin: '0 .5rem 0 0',
                        borderRadius: '.2rem',
                        lineHeight: '1.6rem',
                        fontSize: '1.5rem'
                    },
                    content: {
                        color: '#717071',
                        lineHeight: '1.6rem',
                        fontSize: '1.3rem',
                        wordBreak: 'break-all'
                    }
                },
                mid: {
                    container: {
                        fontSize: '1rem',
                        color: '#fa5e06',
                        display: this.props.data.desc == '' ? 'none' : 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '.5rem',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(223, 223, 223, .5)',
                        paddingBottom: '.2rem'
                    },
                    icon: {
                        height: '1rem',
                        width: '1rem',
                        marginRight: '2px'
                    }
                },
                bottom: {
                    container: {
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '.2rem'
                    },
                    left: {
                        flexGrow: '1',
                        marginLeft: '.5rem',
                        color: '#9B9B9B',
                        fontSize: '1rem',
                        whiteSpace: 'nowrap',
                        marginRight: '.5rem'
                    },
                    right: {
                        width: '5rem',
                        border: '.1rem solid rgba(151, 151, 151, .5)',
                        borderRadius: '.2rem',
                        textAlign: 'center',
                        marginRight: '.5rem',
                        color: '#9B9B9B',
                        lineHeight: '1.2rem',
                        fontSize: '1rem'
                    }
                }
            }
        }

        switch (this.props.uiType) {
            case 0: {
                0 == this.props.data.usingType && (style.right.container = {...style.right.container, ...{
                    background: 'url(' + this.props.attr.uiType.one.rightBgUrl + ') right top / 4rem no-repeat',
                }})
                break;
            }
            case 1: {
                style.left.container.background = 'url(' + this.props.attr.uiType.two.leftBgUrl + ') no-repeat';
                style.right.container.background = 'url(' + this.props.attr.uiType.two.rightBgUrl + ') right top / 3rem no-repeat';
                style.right.top.type.backgroundColor = '#C5C4C4';
                break;
            }
            case 2: {
                style.left.container.background = 'url(' + this.props.attr.uiType.three.leftBgUrl + ') no-repeat';
                style.right.container.background = 'url(' + this.props.attr.uiType.three.rightBgUrl + ') right top / 3rem no-repeat';
                style.right.top.type.backgroundColor = '#C5C4C4';
            }
        }
        
        let title = this.props.data.discountType == 0 ? 
            <div style={style.left.title}>
                <span style={style.left.titleUnit}>¥</span>{this.props.data.title}
            </div>
            :
            <div style={style.left.title}>
                {this.props.data.title}折
            </div>;
        
        return <div style={style.container}>
            <div style={style.left.container}>
                {title}
                <div style={style.left.constrain}>满{this.props.data.constrain}可用</div>
            </div>
            <div style={style.right.container}>
                <div style={style.right.top.container}>
                    <span style={style.right.top.type}>{this.props.data.type}</span>
                    <span style={style.right.top.content}>{this.props.data.content}</span>
                </div>
                <div style={style.right.mid.container}>
                    <img style={style.right.mid.icon} src={this.props.data.iconUrl}/>
                    {this.props.data.desc}
                </div>
                <div style={style.right.bottom.container}>
                    <div style={style.right.bottom.left}>{this.props.data.expireDesc + ' ' + this.props.data.expire}</div>
                    <a onClick={() => {
                        this.props.toggleAwardDesc(true, this.props.data.couponDescription);
                    }} style={style.right.bottom.right}>详细信息</a>
                </div>
            </div>
        </div>;
    }
}

export default connect(state => {}, dispatch => bindActionCreators({toggleAwardDesc}, dispatch))(AwardLottery);