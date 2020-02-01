import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import olympics from './components/olympics.vue'
import todoList from './components/todoList.vue';
import noticias from './components/noticias.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: olympics},
  {path: '/notas', component: todoList, name: "notas"},
  {path: '/noticias', component: noticias},
  {path: '*', component: olympics},
  {path: '/', component: olympics}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
