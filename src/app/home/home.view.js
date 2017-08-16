//react-router
import {Link} from 'react-router';
import router from '../../config/router.config';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


let HomeView =  props => <div>
    <h1>{props.title}</h1>
    <Link to={router.post.detail.replace(':id', Math.ceil(Math.random() * 1e16))}>
        Redirect to post page
    </Link>
</div>;


let mapStateToProps = state => ({...state.home});

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
