//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAward, toggleCode} from '../../redux/actions/ac_modal.js';


class ModalAward extends Modal {
    constructor (...args) {
        super(args);
    }
    
    reLottery () {
        this.props.toggleAward(false);
    }

    openCode () {
        this.props.toggleAward(false);
        this.props.toggleCode(true);
    }
    
    render () {
        let style = {
            container: {
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'stretch',
                justifyContent: 'center',
                height: '60%',
                padding: '2rem'
            },
            button: {
                container: {
                    marginTop: '-2px',
                    paddingBottom: '1.4rem',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '0 0 12px 12px'
                },
                ele: {
                    backgroundColor: '#de4340',
                    height: '4rem',
                    margin: '1.4rem 1.4rem 0 1.4rem',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '2rem'
                }
            },
            result: {
                container: {
                    flexGrow: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    background: `url(${this.props.resultContainer}) center center / cover no-repeat`,
                    borderRadius: '12px 12px 0 0'
                },
                winning: {
                    text: {
                        fontSize: '3rem',
                        color: '#000',
                        marginTop: '1rem',
                        textAlign: 'center'
                    },
                    img: {
                        flexGrow: '1',
                        background: 'url(' + this.props.resultImg + ') center center / auto 85% no-repeat',
                    },
                    title: {
                        color: '#FFDB12',
                        textAlign: 'center',
                        fontSize: '4rem'
                    },
                    desc: {
                        color: '#000',
                        fontSize: '1.4rem',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap'
                    }
                },
                lose: {
                    img: {
                        background: 'url(' + this.props.resultThanksImg + ') center center / auto 80% no-repeat',
                        flexGrow: '1',
                    }
                }
            }
            
        }

        let desc = <div>{`满${this.props.resultConstrain}可用
有效期至:${this.props.resultExpire}
${this.props.resultDesc}`}</div>

        return super.render(<div>
            <div style={style.container}>
                <div style={style.button.container}>
                    <div style={style.button.ele} onClick={this.openCode.bind(this)}>关注我们</div>
                    <div style={style.button.ele} onClick={this.reLottery.bind(this)}>再来一次</div>
                </div>
                {this.props.isWinning ? <div style={style.result.container}>
                    <div style={style.result.winning.text}>{this.props.resultText}</div>
                    <div style={style.result.winning.img}>
                    </div>
                    <div style={style.result.winning.desc}>{desc}</div>
                </div> : <div style={style.result.container}>
                    <div style={style.result.lose.img}></div>
                </div>}
            </div>
        </div>);
    }
}


let mapStateToProps = state => ({...state.modal.award});

let mapDispatchToProps = dispatch => bindActionCreators({toggleAward, toggleCode}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalAward);