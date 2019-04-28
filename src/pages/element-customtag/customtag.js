import Util from '../../common/util'

const Customtag = {
  click(el) {
    el.target.innerHTML = 'click'
  },

  dblclick(el) {
    el.target.innerHTML = 'dblclick'
  },

  mousemove(el) {
    el.target.style = `color:${Util.getRandomColor()}`
  }
}

export default {
  name: 'XCustomtag',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Object.create(Customtag)
    }

    return h('div', data, children)
  }
}
