import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
Router.prototype.go = function () {
    this.isBack = true;
    window.history.go(-1)
};
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home')
        },{
            path: '/one',
            name: 'ThemeOne',
            component: () => import('@/components/one/Index'),
            redirect: {name: 'ThemeOneBegin'},
            children: [
                {
                    path: '/begin',
                    name: 'ThemeOneBegin',
                    component: () => import('@/components/one/Begin')
                },
                {
                    path: '/answer',
                    name: 'Answer',
                    component: () => import('@/components/one/Answer')
                }
            ]
        }
    ]
})
