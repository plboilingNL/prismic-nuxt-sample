import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
const VueSlick = {
  install(Vue, options) {
    Vue.component('VueSlickCarousel', VueSlickCarousel)
  }
}
Vue.use(VueSlick)
export default VueSlick
