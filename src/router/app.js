//global style
import '../styles/style.scss';

//Material UI
  //tap event
import injectTapEventPlugin from 'react-tap-event-plugin';

import FAB from '../components/fab/fab.controller.js';

import Snackbar from '../components/global/snackbar.controller.js';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export default class App extends React.Component {
    render() {
        return <div>
            <FAB />
            <Snackbar />
            <ReactCSSTransitionGroup
                transitionName="fadeWrapper"
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }>
                <div
                    key={ this.props.location.pathname }
                    style={ {position: 'absolute', width: '100%'} }
                >
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}
