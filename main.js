import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import Tools from '@/common/Tools.js'
import uView from './uni_modules/diy-uview-ui';
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$tools = new Tools()
  app.use(uView)
  return {
    app
  }
}
// #endif