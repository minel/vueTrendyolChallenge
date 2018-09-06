import Vue from 'vue';
import Router from 'vue-router';
import CreateSession from './pages/CreateSession.vue';
import ScrumMaster from './pages/ScrumMaster.vue';
import Developer from './pages/Developer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: CreateSession,
      name: 'CreateSession',
    },
    {
      path: '/ScrumMaster',
      component: ScrumMaster,
      name: 'ScrumMaster',
    },
    {
      path: '/Developer',
      component: Developer,
      name: 'Developer',
    },
  ],
});
