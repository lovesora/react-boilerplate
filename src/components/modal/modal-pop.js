//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {togglePop} from '../../redux/actions/ac_modal.js';

//component
import PopBox from '../pop-box/pop-box';


class ModalPop extends Modal {
    constructor (...args) {
        super(args);
    }

    closeModal () {
        this.props.togglePop(false);
    }
    
    render () {
        return super.render(<div>
            <div>
                <PopBox text={this.props.text} buttonText="知道了" textStyle={{
                    color: 'red'
                }} onClick={this.closeModal.bind(this)} />
            </div>
        </div>);
    }
}


let mapStateToProps = state => ({...state.modal.pop});

let mapDispatchToProps = dispatch => bindActionCreators({togglePop}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalPop);