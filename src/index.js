//react router
import {Router, browserHistory} from 'react-router';
import routes from './router/routes';


//redux
import {Provider} from 'react-redux';
import createStore from './redux/store/index';


// HMR
import {AppContainer} from 'react-hot-loader';


const rootEl = document.getElementById('app');
const render = props => {
    // 必须加上key, 不然react不会渲染
    ReactDOM.render((
        <AppContainer>
            <Provider store={createStore()}>
                <Router history={browserHistory} routes={props} key={Math.random()}/>
            </Provider>
        </AppContainer>
    ), rootEl);
};

render(routes);

// HMR
if (module.hot) {
    module.hot.accept('./router/routes', () => render(require('./router/routes').default));
}