import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

Vue.use(TreeMapPlugin);

Vue.config.productionTip = false;

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);


new Vue({
  router,
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount("#app");
