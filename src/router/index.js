import Vue from 'vue'
import Router from 'vue-router';
import store from '../store';
import http from 'axios';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/components/Index')
        },
        {
            path: '/:id',
            name: 'Home',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'default',
                    name: 'ThemeDefault',
                    component: () => import('@/components/default/Index'),
                    redirect: {
                        name: 'ThemeDefaultBegin'
                    },
                    children: [
                        {
                            path: 'begin',
                            name: 'ThemeDefaultBegin',
                            meta: {},
                            component: () => import('@/components/default/Begin')
                        },
                        {
                            path: 'answer',
                            name: 'ThemeDefaultAnswer',
                            meta: {},
                            component: () => import('@/components/default/Answer')
                        },
                        {
                            path: 'end',
                            name: 'ThemeDefaultEnd',
                            meta: {},
                            component: () => import('@/components/default/End')
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
            console.log('questions', res.data);
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
