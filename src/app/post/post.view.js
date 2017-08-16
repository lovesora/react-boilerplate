import {imgs} from '../../asset/index';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


let PostView = props => {
    let style = {
        img: {
            width: '50%',
            float: 'left'
        }
    }

    return <div>
        <p>{props.id}</p>
        <img style={style.img} src={imgs.png.js} alt="js"/>
        <img style={style.img} src={imgs.png.css} alt="css"/>
    </div>;
}

let mapStateToProps = state => ({...state.post});

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
