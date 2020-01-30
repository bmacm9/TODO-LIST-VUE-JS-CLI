import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import olymArticles from './components/olymArticles.vue';
import todoList from './components/todoList.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: olymArticles},
  {path: '/notas', component: todoList},
  {path: '*', component: olymArticles},
  {path: '/', component: olymArticles}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
