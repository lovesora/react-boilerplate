//react-router
import {Link} from 'react-router';
import router from '../../config/router.config';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Compat} from 'lx-js-lib';

let HomeView =  props => {
    let wechatInfo = navigator.userAgent.match(/MicroMessenger\/(\d)\.(\d)\./i) ;
    let nav = <div>
        <h1>navigator</h1>
        <p>appCodeName: {navigator.appCodeName}</p>
        <p>appName: {navigator.appName}</p>
        <p>appVersion: {navigator.appVersion}</p>
        <p>userAgent: {navigator.userAgent}</p>

        <p>wechat: {Object.prototype.toString.apply(wechatInfo)}</p>
        <p>wx version: {Compat.browser.getWechatVersion()}</p>

        <p>isAbleAnimation: {`${Compat.css.isAbleAnimate()}`}</p>
        <p>browser: {Compat.browser.getType()}</p>
    </div>;

    let cssDetect = <div>
        <h1>css detection</h1>
        <p>{`${Compat.css.isAbleByStyleName(['animation', 'flex'])}`}</p>
    </div>;

    return <div>
        <h1>{props.title}</h1>
        {nav}
        {cssDetect}
        <Link to={router.post.detail.replace(':id', Math.ceil(Math.random() * 1e16))}>
            Redirect to post page
        </Link>
    </div>;
};


let mapStateToProps = state => ({...state.home});

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
