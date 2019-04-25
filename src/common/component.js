import Vue from 'vue'
import elementCustomtag from '../pages/element-transition/customtag'

const components = [elementCustomtag]

const install = (Vue, opt = {}) => {
  console.log('init components')
  components.forEach(component => {
    console.log(':', component.name)
    Vue.component(component.name, component)
  })
}

;(function() {
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
  install(Vue)
})()
