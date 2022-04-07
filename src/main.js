import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import window from './assets/Ui/Window'
import './assets/index.css'

Vue.config.productionTip = false
Vue.component('window', window)

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')
