import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { TreeMapPlugin } from "@syncfusion/ej2-vue-treemap";
import "leaflet/dist/leaflet.css";

Vue.use(TreeMapPlugin);

Vue.config.productionTip = false;

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
