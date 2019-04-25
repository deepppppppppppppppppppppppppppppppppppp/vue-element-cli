export default {
  name: 'functional-button',
  functional: true,
  // render(h, { props, children, slots, parent, listeners, injections, data }) {
  render(h, context) {
    console.log('context:', context)
    return h('button', 'click me')
  }
}
