//react-router
import { Link } from 'react-router';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openSnackbar } from '../redux/actions/ac_snackbar';

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
        this.props.openSnackbar('你已经离开Home Route!');
    }

    render() {
        return <div>
            <h1>Home</h1>
            <Link to={'/post/' + Math.ceil(Math.random() * 1e16)}>
                Redirect to post page
            </Link>
        </div>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
