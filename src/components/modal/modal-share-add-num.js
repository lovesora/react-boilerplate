//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleShareAddNum} from '../../redux/actions/ac_modal.js';

//component
import PopBox from '../pop-box/pop-box';


class ModalShareAddNum extends Modal {
    constructor (...args) {
        super(args);
    }

    closeBgModal () {
        this.props.toggleShareAddNum(false);
    }
    
    render () {
        let style = {
            container: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch'
            },
            arrow: {
                height: '40%',
                margin: '1.5rem'
            },
            text: {
                color: 'rgba(255, 255, 255, .85)',
                textAlign: 'center',
                fontSize: '3rem',
                backgroundColor: 'rgba(255, 0, 0, 0.8)' ,
                margin: '0 3rem'
            }
        }
        return super.render(<div>
            <div style={style.container}>
                <img style={style.arrow} src={this.props.arrowImgUrl} />
                <div style={style.text}>{this.props.text.replace('N', this.props.num)}</div>
            </div>
        </div>, {
            backgroundColor: 'rgba(0, 0, 0, .6)'
        });
    }
}


let mapStateToProps = state => ({...state.modal.shareAddNum});

let mapDispatchToProps = dispatch => bindActionCreators({toggleShareAddNum}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalShareAddNum);
                