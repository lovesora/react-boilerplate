//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAwardDesc} from '../../redux/actions/ac_modal.js';

//component
import PopBox from '../pop-box/pop-box';


class ModalAwardDesc extends Modal {
    constructor (...args) {
        super(args);
    }

    closeModal () {
        this.props.toggleAwardDesc(false);
    }
    
    render () {
        return super.render(<div>
            <div>
                <PopBox text={this.props.text} buttonText="知道了" textStyle={{
                    textAlign: 'center'
                }} onClick={this.closeModal.bind(this)} />
            </div>
        </div>);
    }
}


let mapStateToProps = state => ({...state.modal.awardDesc});

let mapDispatchToProps = dispatch => bindActionCreators({toggleAwardDesc}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalAwardDesc);