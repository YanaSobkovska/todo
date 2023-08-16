import Vue from 'vue';
import App from './App.vue';
import store from './store'; /*vuex store*/
import ElementUI from 'element-ui'; /*Бібліотека*/
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
