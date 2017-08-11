import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleLoading} from '../../redux/actions/ac_modal.js';


class ModalLoading extends Modal {
    constructor (...args) {
        super (args);
    }

    closeBgModal () {}

    render () {
        return super.render(<div>
            <div className="loading-spinning-bubbles" style={{alignSelf: 'center'}}>
                <div className="box">
                    <div className="bubble"></div><div className="bubble"></div>
                    <div className="bubble"></div><div className="bubble"></div>
                </div>
                <div className="box">
                    <div className="bubble"></div><div className="bubble"></div>
                    <div className="bubble"></div><div className="bubble"></div>
                </div>
            </div>
        </div>, {
            backgroundColor: 'rgba(255, 255, 255, 1)',
        });
    }
}

let mapStateToProps = state => ({...state.modal.loading});

let mapDispatchToProps = dispatch => bindActionCreators({toggleLoading}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalLoading);