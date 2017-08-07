import AppRoute from './app.route';
import HomeRoute from './home.route';
import PostRoute from './post.route';

// 相对路径
let RELATIVEPATH = '/x/y/';


// 路由地址
export const URL = {
    HOME: RELATIVEPATH,
    POST: RELATIVEPATH + 'post/'
};


// react-router路由列表
export const routes = {
    path: URL.HOME,
    component: AppRoute,
    indexRoute: {
        component: HomeRoute
    },
    childRoutes: [{
        path: URL.POST + ':id',
        component: PostRoute
    }]
};
