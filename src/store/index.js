import Vuex from 'vuex'
import Vue from 'vue'
import stuff from './stuff';

Vue.use(Vuex);


const state = {
    stuff: stuff
};
const getters = {
    stuffGet: state => state.stuff
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
