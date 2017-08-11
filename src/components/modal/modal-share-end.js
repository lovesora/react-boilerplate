//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleShareEnd} from '../../redux/actions/ac_modal.js';

//component
import PopBox from '../pop-box/pop-box';


class ModalShareEnd extends Modal {
    constructor (...args) {
        super(args);
    }

    closeBgModal () {
        this.props.toggleShareEnd(false);
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
                height: '50%',
                margin: '1.5rem'
            },
        }
        return super.render(<div>
            <div style={style.container}>
                <img style={style.arrow} src={this.props.arrowImgUrl} />
            </div>
        </div>, {
            backgroundColor: 'rgba(0, 0, 0, .6)'
        });
    }
}


let mapStateToProps = state => ({...state.modal.shareEnd});

let mapDispatchToProps = dispatch => bindActionCreators({toggleShareEnd}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalShareEnd);