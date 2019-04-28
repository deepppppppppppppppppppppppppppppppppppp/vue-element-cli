export default {
  name: 'functional-button',
  functional: true,
  // render(h, { props, children, slots, parent, listeners, injections, data }) {
  render(h, context) {
    return h(
      'button',
      {
        on: {
          click: () => {
            console.log('context:', context)
          }
        }
      },
      'click me'
    )
  }
}
