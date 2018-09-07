import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  status: {
    waiting: false,
    success: false,
    error: false,
  },
};

const getters = {
  getStatus(state) {
    return state.status;
  },
};

const mutations = {
  fetchWaiting(state) {
    state.status = {
      waiting: true,
      success: false,
      error: false,
    };
  },
  fetchSuccess(state) {
    state.status = {
      waiting: false,
      success: true,
      error: false,
    };
  },
  fetchError(state) {
    state.status = {
      waiting: false,
      success: false,
      error: true,
    };
  },
};

const actions = {
  getData() {},
  postData({ commit }, payload) {
    const requestParam = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(payload.data), // body data type must match "Content-Type" header
    };
    return new Promise((resolve, reject) => {
      commit('fetchWaiting');
      fetch(payload.url, requestParam)
        .then(res => res.json()).then((res) => {
          commit('fetchSuccess');
          resolve(res.Data);
          console.log('Data posted successfully to url: ', payload.url);
        })
        .catch((err) => {
          commit('fetchError');
          reject(err);
          console.log('An error occurred when trying to post: ', err);
        });
    });
  },
};

const fetchApi = {
  getters,
  state,
  mutations,
  actions,
};

export default fetchApi;
