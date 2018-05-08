import Vuex from 'vuex'
import Vue from 'vue'
import types from './mutation-types';
import _find from 'lodash/find'
import _filter from 'lodash/filter'

Vue.use(Vuex);


const state = {
    step: 1,
    mainData: {},
    navChain: {
        from: '',
        transition: ''
    },
    commitData: {
        answerItems: []
    }
};
const getters = {
    stepGet: state => state.step,
    mainDataGet: state => state.mainData,
    questionsGet: state => state.mainData.questions ? state.mainData.questions : [],
    routeTransitionGet: state => state.navChain.transition,
    routeFromGet: state => state.navChain.from,
    stepGet: state => state.step,
    commitDataGet: state => state.commitData
};
const actions = {
    pushNavFrom({commit}, from) {
        commit(types.PUSH_NAV_FROM, from);
    },
    pushNavTransition({commit}, transition) {
        commit(types.PUSH_NAV_TRANSITION, transition)
    },
    pushStep({commit}, step) {
        commit(types.PUSH_STEP, step);
    },
    fetchQuestion({commit}, mainData) {
        commit(types.FETCH_QUESTION, mainData);
    },
    commitData({commit}, answer) {
        console.log(answer)
        commit(types.COMMIT_DATA, answer);
    },
    navigate({commit}, mainData) {

    }
};
const mutations = {
    [types.PUSH_NAV_FROM](state, from) {
        state.navChain.from = from;
    },
    [types.PUSH_NAV_TRANSITION](state, transition) {
        state.navChain.transition = transition;
    },
    [types.PUSH_STEP](state, step) {
        state.step = step;
    },
    [types.FETCH_QUESTION](state, mainData) {
        state.mainData = mainData;
    },
    [types.COMMIT_DATA](state, data) {
        let answer = _find(state.commitData.answerItems, {questionId: data.questionId});
        if (answer) {
            state.commitData.answerItems = _filter(state.commitData.answerItems, o => o.questionId != data.questionId);
        }
        state.commitData.answerItems.push(data);
    }
};


export default new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations
});
