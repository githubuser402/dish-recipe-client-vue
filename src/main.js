import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$dishApi = 'http://127.0.0.1:5000';
Vue.prototype.$dishApiTokenKey = 'dish_api_token';

Vue.mixin({
  methods: {
    saveToken(token) {
      localStorage.setItem(this.$dishApiTokenKey, token);
      console.log(`saved token to local storage: ${localStorage.getItem(this.$dishApiTokenKey)}`);
    },
    userHasValidToken() {
      const token = localStorage.getItem(this.$dishApiTokenKey);
      console.log(token);
      if (token) {
        return true;
      }
      return false;
    },
    logoutUser() {
      localStorage.removeItem(this.$dishApiTokenKey);
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
