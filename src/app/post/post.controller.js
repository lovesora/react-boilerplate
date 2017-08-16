// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPostId} from '../../redux/action/ac-post';

// view
import PostView from './post.view';

// data
import {getData} from '../../server/fetch/user/user.fetch';

class PostController extends React.Component {
    constructor (...args) {
        super(args)
    }

    componentWillMount () {
        this.props.setPostId(this.props.id);
    }

    async srvGetData () {
        try {
            let data = await getData();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    
    render () {
        return <PostView/>
    }
}

let mapStateToProps = () => {};

let mapDispatchToProps = dispatch => bindActionCreators({
    setPostId,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostController);