import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


const state = {
    hello: 'hello world state'
};
const getters = {
    helloGet: state => state.hello
};
const actions = {};
const mutations = {};


export default new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations
});
