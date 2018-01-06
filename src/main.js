// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vars from './vars'
import store from './store/'

Vue.use(MintUI)

Vue.config.productionTip = true;

Vue.prototype.$http = Axios.create({
    baseURL: vars.data.baseUrl
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
