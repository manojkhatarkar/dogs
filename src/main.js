import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Toasted from 'vue-toasted'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import { store } from './store/store'

Vue.use(Toasted)
loadProgressBar()
const error_options = {
  type: 'error',
  position: 'bottom-center',
  singleton: true,
  theme: 'bubble',
  duration: 5000,
  onClick: (e, toastObject) => {
    toastObject.goAway(0)
  }
}
const success_options = {
  type: 'success',
  singleton: true,
  position: 'bottom-center',
  duration: 5000,
  onClick: (e, toastObject) => {
    toastObject.goAway(0)
  }
}
Vue.toasted.register('error',
  (payload) => {
    // if there is no message passed show default message
    if (!payload.message) {
      return 'Oops.. Something Went Wrong..'
    }
    // if there is a message show it with the message
    return payload.message
  },
  error_options
)
Vue.toasted.register('success',
  (payload) => {
    // if there is no message passed show default message
    if (!payload.message) {
      return 'Greate.. Proceed Successfully..'
    }
    // if there is a message show it with the message
    return payload.message
  },
  success_options
)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    //key: 'AIzaSyDvWlAmW_p4ffskUL6tKPbDKD-ujAlW2AQ',
    key: 'AIzaSyCH01IUDnfe-khRldTzy_mdZ2x_RRxTkr4',
    v: 3.38,
    libraries: 'places' // necessary for places input

  },
  installComponents: true
})
new Vue({
  data: {
    URL_ROOT: 'https://pawsos.in/api/',
    dogs_img: 'https://pawsos.in/api/uploads/dogs/',
    URL_IMAGES: 'https://pawsos.in/api/uploads/',

    //rozor_key:'rzp_test_1U8yAuzPHDQxVK',
    rozor_key:'rzp_live_rRETqzbrMJWbIj',
    // URL_ROOT: 'http://mssinfotech.co.in/dogs/api/',
    // opencagedata
    OC_API: '83e8e742fcec49fbbbcd7cfca4397a53',
    auth: { Authorization: localStorage.getItem('token') }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
