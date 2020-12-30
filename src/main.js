import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import * as echarts from 'echarts'


if (window.sessionStorage.getItem('crumbs_List')) {
  var arr = JSON.parse(sessionStorage.getItem('crumbs_List'))
} else {
  var arr = [{
    name: '首页',
    link: '/'
  }, ]
  window.sessionStorage.setItem('crumbs_List', JSON.stringify(arr))
}

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");