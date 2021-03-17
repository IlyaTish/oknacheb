// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import LazyLoadDirective from '@/directives/lazy-load-directive'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay, Lazy } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import './assets/libs/libs.min.css'
import './assets/stylus/main.styl'
import 'swiper/swiper-bundle.min.css'

import Constants from './data/common-data'

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

Vue.prototype.$CONSTANTS = Constants
Vue.config.productionTip = false

Vue.directive('lazyload', LazyLoadDirective)

Vue.use(VueYouTubeEmbed)
Vue.use(getAwesomeSwiper(SwiperClass))
SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, Lazy])

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
