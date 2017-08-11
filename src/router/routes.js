import AppRoute from './app.route';
import HomeRoute from './home.route';
import AwardTabRoute from './award-tab.route';


import config from '../config/env.config';

let relativePath = config.router.relativePath;

export const url = {
    home: relativePath,
    award: relativePath + 'award'
};


export const routes = {
    path: url.home,
    component: AppRoute,
    indexRoute: {
        component: HomeRoute
    },
    childRoutes: [{
        path: url.award,
        component: AwardTabRoute
    }]
};