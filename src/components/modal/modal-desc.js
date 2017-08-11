//react-router
import {browserHistory} from 'react-router';
import {url} from '../../router/routes';


//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleDesc} from '../../redux/actions/ac_modal.js';



class ModalDesc extends Modal {
    constructor (...args) {
        super(args);
    }

    closeBgModal () {
        this.props.toggleDesc(false);
    }

    openCoupon () {
        browserHistory.push(url.award);
    }

    componentDidMount () {
        document.querySelector('#modal-desc__text-container').innerHTML = this.props.text;
    }

    componentWillReceiveProps (nextProps) {
        document.querySelector('#modal-desc__text-container').innerHTML = nextProps.text;
    }
    
    render () {
        let style = {
            button: {
                backgroundColor: '#de4340',
                height: '4.8rem',
                margin: '0 1.4rem 1.4rem 1.4rem',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '2rem'
            },
            result: {
                container: {
                    margin: '1.4rem',
                    flexGrow: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap'
                }
            }
        }
        return super.render(<div>
            <div style={style.button} onClick={this.openCoupon.bind(this)}>查看我的红包</div>
            <div id='modal-desc__text-container' style={style.result.container}>
            </div>
        </div>);
    }
}


let mapStateToProps = state => ({...state.modal.desc});

let mapDispatchToProps = dispatch => bindActionCreators({toggleDesc}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalDesc);