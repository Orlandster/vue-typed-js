<template>
  <div class="typed-element" ref="typedElement">
    <slot></slot>
  </div>
</template>

<script>
import Typed from 'typed.js'
import { props, getEventHandlers } from '../config/typed-component.config'

export default {
  name: 'vue-typed-js',
  props,
  data () {
    return {
      typedObj: null,
    }
  },
  methods: {
    throwError: function (message) {
      throw new TypeError(message)
    },
    initTypedJS: function () {
      const $typed = this.$refs.typedElement.querySelector('.typing')

      if (this.$slots.default.length > 1) {
        this.throwError(`Just one child element allowed inside <${this.$options.name}> component.`)
      } else if (this.$slots.default.length === 1) {
        let typedConfig = this.$props
        typedConfig = getEventHandlers(this, typedConfig)
        this.typedObj = new Typed($typed, typedConfig)
      }
    },
  },
  mounted: function () {
    this.initTypedJS()
  },
}
</script>

<style lang="scss">
.typed-element {
  display: flex;
  align-items: center;

  .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }
}

@keyframes typedjsBlink{
  50% { opacity: 0.0; }
}
</style>
