//react-router
import {url} from '../../router/routes';
import {browserHistory} from 'react-router';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleDesc} from '../../redux/actions/ac_modal';

function ButtomIcons (props) {
    let openDesc = () => {
        props.toggleDesc(true);
    }

    let openAwardList = () => {
        browserHistory.push(url.award);
    }
    
    let style = {
        container: {
            position: 'fixed',
            bottom: '.8rem',
            left: '1.2rem',
            right: '1.2rem',
            display: 'flex',
            justifyContent: 'space-between'
        },
        img: {
            width: '4rem',
            height: '4rem'
        }
    }
    return <div style={style.container}>
        <img style={style.img} src={props.desc} onClick={openDesc} />
        <img style={style.img} src={props.award} onClick={openAwardList} />
    </div>;
}


let mapStateToProps = state => ({...state.home.iconUrls});

let mapDispatchToProps = dispatch => bindActionCreators({toggleDesc}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtomIcons);

