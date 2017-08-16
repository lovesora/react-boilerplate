import AppRoute from './app.route';
import HomeRoute from './home.route';
import PostRoute from './post.route';

import router from '../config/router.config'

// react-router路由列表
export default {
    path: router.home,
    component: AppRoute,
    indexRoute: {
        component: HomeRoute
    },
    childRoutes: [{
        path: router.post.detail,
        component: PostRoute
    }]
};
