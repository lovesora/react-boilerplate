//react-router
import {Link} from 'react-router';
import {URL} from './routes';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class HomeRoute extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave.bind(this)
        );
    }

    routerWillLeave(nextLocation) {
        console.log('你已经离开Home Route!');
    }

    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <Link to={URL.POST + Math.ceil(Math.random() * 1e16)}>
                Redirect to post page
            </Link>
        </div>;
    }
}

let mapStateToProps = state => ({...state.home});

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
