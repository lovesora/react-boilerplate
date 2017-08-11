//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


//components
import RotaryLottery from '../components/rotary-lottery/rotary-lottery';
import BottomIcons from '../components/icon/bottom-icons';
import ModalAward from '../components/modal/modal-award';
import ModalDesc from '../components/modal/modal-desc';
import ModalCode from  '../components/modal/modal-code';
import ModalShareEnd from '../components/modal/modal-share-end';
import ModalShareAddNum from '../components/modal/modal-share-add-num';
import ModalPop from '../components/modal/modal-pop';


class HomeRoute extends React.Component {
    render () {
        let style = {
            container: {
                background: `url('${this.props.bg}') center center / 100% 100% no-repeat`,
                minHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
        // <BottomIcons/>
        // <ModalAward/>
        // <ModalDesc/>
        // <ModalCode/>
        // <ModalShareEnd/>
        // <ModalShareAddNum/>
        // <ModalPop/>
        return <div style={ style.container }>
            <RotaryLottery/>
        </div>;
    }
}

let mapStateToProps = state => ({...state.home.imgUrls});


let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
