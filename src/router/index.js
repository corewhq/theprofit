import Vue from 'vue'
import Router from 'vue-router';
import store from '../store';
import http from 'axios';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/:id',
            name: 'Home',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'one',
                    name: 'ThemeOne',
                    component: () => import('@/components/one/Index'),
                    redirect: {name: 'ThemeOneBegin'},
                    children: [
                        {
                            path: 'begin',
                            name: 'ThemeOneBegin',
                            meta: {},
                            component: () => import('@/components/one/Begin')
                        },
                        {
                            path: 'answer',
                            name: 'OneAnswer',
                            meta: {},
                            component: () => import('@/components/one/Answer')
                        },
                        {
                            path: 'end',
                            name: 'ThemeOneEnd',
                            meta: {},
                            component: () => import('@/components/one/End')
                        }
                    ]
                }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    // && (!store.state.mainData.questions || store.state.mainData.questions.length == 0)
    if (to.params.id) {
        http.get(`/page/mb/${to.params.id}/answer`, {
            params: {
                release: to.query.release
            }
        }).then(res => {
            store.dispatch('fetchQuestion', res.data);
        }).catch(err => {
        })
    }
    console.log('To', to);
    console.log('From', from);
    next()
});

router.afterEach((to, from) => {
});

export default router;
