import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sessions: [],
};

const getters = {
  fetchSessions(state) {
    return state.sessions;
  },
};

const mutations = {
  setSession(state, data) {
    state.sessions.push(data);
  },
};

const actions = {
  _createSession({ commit }, data) {
    commit('setSession', data);
  },
};

const sessions = {
  getters,
  state,
  mutations,
  actions,
};

export default sessions;
