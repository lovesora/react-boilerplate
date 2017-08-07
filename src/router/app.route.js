//global style
import '../styles/style.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export default class App extends React.Component {
    render () {
        return <div>
            <ReactCSSTransitionGroup
                transitionName="fadeWrapper"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div
                    key={this.props.location.pathname}
                    style={{position: 'absolute', width: '100%'}}
                >
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}
