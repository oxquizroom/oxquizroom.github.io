import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toSetFont from './utils/font'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    toSetFont()
  },
  render: h => h(App)
}).$mount('#app')
