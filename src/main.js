import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from "axios";
import Toasted from 'vue-toasted';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Toasted)

// you can also pass options, check options reference below
const options = {
  type: 'info',
  position: 'top-right',
  theme: 'toasted-primary'
}
Vue.use(Toasted, options)

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
