import Vue from 'vue';
import Router from 'vue-router';
import CreateSession from './pages/CreateSession.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: CreateSession,
      name: CreateSession,
    },
  ],
});
