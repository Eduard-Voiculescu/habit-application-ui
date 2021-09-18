import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from "axios";
import router from './router/router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import the Auth0 configuration
import { domain, clientId } from "./auth/auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
