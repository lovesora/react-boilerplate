import HomeView from '../app/home/home.view';


class HomeRoute extends React.Component {
    constructor (...args) {
        super(...args);
        this.lx = 'liu';
    }

    componentDidMount () {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave.bind(this)
        );
    }

    routerWillLeave () {
        console.log('你已经离开Home Route!');
    }
    
    render () {
        return <div>
            <HomeView/>
        </div>;
    }
}

export default HomeRoute;