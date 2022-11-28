import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$dishApi = 'http://127.0.0.1:5000/';
Vue.prototype.$dish_api_token_key = 'dish_api_token';

Vue.mixin({
  methods: {
    saveToken(token) {
      localStorage.setItem(this.$dish_api_token_key, token);
      console.log(`saved token to local storage: ${localStorage.getItem(this.$dish_api_token_key)}`);
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
