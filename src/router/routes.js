import App from './app.js';
import Home from './home.js';
import Post from './post.js';

export const url = {
    home: '/',
    post: '/post'
};


export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [{
            path: 'post/:name',
            component: Post
        }
    ]
};
