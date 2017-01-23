import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

const Top = {
  template: '<div><h1>Top</h1></div>'
}

const About = {
  template: '<div><h1>About</h1></div>'
}

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About }
  ]
})

const app = new Vue({
  router,
  ...App
})

document.addEventListener('DOMContentLoaded', () => app.$mount('#app'))