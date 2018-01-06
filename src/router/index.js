import Vue from 'vue'
import store from '../store';
import Router from 'vue-router';
import types from '../store/mutation-types';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home')
        }, {
            path: '/one',
            name: 'ThemeOne',
            component: () => import('@/components/one/Index'),
            redirect: {name: 'ThemeOneBegin'},
            children: [
                {
                    path: '/begin',
                    name: 'ThemeOneBegin',
                    meta: {
                        index: 1
                    },
                    component: () => import('@/components/one/Begin')
                },
                {
                    path: '/answer',
                    name: 'Answer',
                    meta: {
                        index: 2
                    },
                    component: () => import('@/components/one/Answer')
                }
            ]
        }
    ]
});
window.addEventListener("popstate", e => {
    console.log(e);
    this.isBack = true;
}, false);

router.beforeEach((to, from, next) => {
    let transition = '';
    if (this.isBack) {
        transition = 'slide-right'
    } else {
        transition = 'slide-left'
    }
    store.commit(types.PUSH_NAV_TRANSITION, transition);
    next()
});

router.afterEach((to, from) => {
    this.isBack = false;
});

export default router;
