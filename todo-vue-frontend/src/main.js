import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios;
  },
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
