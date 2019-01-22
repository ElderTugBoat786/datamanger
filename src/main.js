import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

Vue.config.productionTip = false

/* test 1*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
