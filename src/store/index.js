import Vuex from 'vuex'
import Vue from 'vue'
import types from './mutation-types';
import stuff from './stuff';

Vue.use(Vuex);


const state = {
    stuff: stuff,
    step: 1,
    navChain: {
        from: '',
        transition: ''
    }
};
const getters = {
    stuffGet: state => state.stuff,
    stepGet: state => state.step,
    routeTransitionGet: state => state.navChain.transition,
    routeFromGet: state => state.navChain.from
};
const actions = {
    pushNavFrom({commit}, from) {
        commit(types.PUSH_NAV_FROM, from);
    },
    pushNavTransition({commit}, transition){
        commit(types.PUSH_NAV_TRANSITION, transition)
    },
    pushStep({commit}, step){
        commit(types.PUSH_STEP, step)
    }
};
const mutations = {
    [types.PUSH_NAV_FROM](state, from) {
        state.navChain.from = from;
    },
    [types.PUSH_NAV_TRANSITION](state, transition) {
        state.navChain.transition = transition;
    },
    [types.PUSH_STEP](state, step){
        state.step = step
    }
};


export default new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations
});
