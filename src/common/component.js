import Vue from 'vue'
import XCustomtag from '../pages/element-customtag/customtag'
import functionButton from '../pages/functionButton/functionButton'
import ElCollapseTransition from '../common/transition'

const components = [XCustomtag, functionButton, ElCollapseTransition]

export default {
  install: (Vue, opt = {}) => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
