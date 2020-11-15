import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import HistogramSlider from 'vue-histogram-slider';
import 'vue-histogram-slider/dist/histogram-slider.css';

Vue.config.productionTip = false
Vue.component(HistogramSlider.name, HistogramSlider);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
