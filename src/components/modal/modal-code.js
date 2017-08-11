//modal default style
import Modal from './modal-defult';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleCode} from '../../redux/actions/ac_modal.js';



class ModalDesc extends Modal {
    constructor (...args) {
        super(args);
    }

    closeModal () {
        this.props.toggleCode(false);
    }
    
    render () {
        let style = {
            text: {
                marginTop: '2rem',
                textAlign: 'center',
                fontSize: '2rem',
                color: '#fff'
            },
            codeHint: {
                background: 'url('+this.props.codeHintUrl+') no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                height: '200px'
            },
            code: {
                height: '200px',
                display: 'flex',
                justifyContent: 'center'
            },
            codeImg: {
                height: '100%',
                width: 'auto'
            },
            close: {
                background: 'url('+this.props.codeCloseUrl+') no-repeat',
                backgroundSize: '4rem 4rem',
                backgroundPosition: 'right bottom',
                height: '60px',
                marginRight: '4rem'
            }
            
        }
        return super.render(<div>
            <div style={style.text}>{this.props.text}</div>
            <div style={style.codeHint}></div>
            <div style={style.code}>
                <img src={this.props.codeUrl} style={style.code}/>
            </div>
            <div style={style.close} onClick={this.closeModal.bind(this)}></div>
        </div>, {
            justifyContent: 'center'
        });
    }
}


let mapStateToProps = state => ({...state.modal.code});

let mapDispatchToProps = dispatch => bindActionCreators({toggleCode}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalDesc);