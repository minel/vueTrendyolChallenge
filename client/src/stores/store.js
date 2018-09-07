import Vue from 'vue';
import Vuex from 'vuex';

import fetchApi from './modules/fetchApi';
import sessions from './modules/sessions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fetchApi,
    sessions,
  },
});
