import Vuex from 'vuex'
import Vue from 'vue'
import types from './mutation-types';
import stuff from './stuff';

Vue.use(Vuex);


const state = {
    stuff: stuff,
    navChain: {
        from: '',
        transition: ''
    }
};
const getters = {
    stuffGet: state => state.stuff,
    routeTransitionGet: state => state.navChain.transition,
    routeFromGet: state => state.navChain.from
};
const actions = {
    pushNavFrom({commit}, from) {
        commit(types.PUSH_NAV_FROM, from);
    },
    pushNavTransition({commit}, transition){
        commit(types.PUSH_NAV_TRANSITION, transition)
    }
};
const mutations = {
    [types.PUSH_NAV_FROM](state, from) {
        state.navChain.from = from;
    },
    [types.PUSH_NAV_TRANSITION](state, transition) {
        state.navChain.transition = transition;
    }
};


export default new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations
});
