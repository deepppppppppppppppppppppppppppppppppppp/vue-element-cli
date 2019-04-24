import Vue from 'vue'

/**
 * 无渲染组件，表现和行为分离
 */
Vue.component('tags-input', {
  name: 'tagsInput',
  props: ['value'],
  data() {
    return {
      newTag: ''
    }
  },
  methods: {
    addTag() {
      console.log(this.$attrs)
      if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
        return
      }
      this.$emit('input', [...this.value, this.newTag.trim()])
      this.newTag = ''
    },
    removeTag(tag) {
      this.$emit('input', this.value.filter(t => t !== tag))
    }
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      addTag: this.addTag,
      removeTag: this.removeTag,
      inputAttrs: {
        value: this.newTag
      },
      inputEvents: {
        input: e => {
          this.newTag = e.target.value
        },
        keydown: e => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.addTag()
          }
        }
      }
    })
  }
})
