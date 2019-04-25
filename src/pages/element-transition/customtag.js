class Customtag {
  click(el) {
    console.log('getElementText:', el.innerHTML)
    el.innerHTML = 'getElementText:' + el.innerHTML
  }

  dblclick(el) {
    el.innerHTML = 'setElementText:' + el.innerHTML
    console.log('setElementText:', el.innerHTML)
  }
}

export default {
  name: 'element-customtag',
  functional: true,
  render(h, context) {
    const data = {
      on: new Customtag()
    }

    console.log('context:', context)
    return h('transition', data, context.children)
  }
}
