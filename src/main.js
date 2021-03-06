// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import moment from 'moment';
import VueChatScroll from 'vue-chat-scroll';

// Setting up the vue use for the resources used in the app
Vue.use(VueChatScroll);

// Setting up the filter for the timestamp
Vue.filter('timestamp', value => {
  return moment(value).format('MMMM Do YYYY, h:mm:ss a');
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
