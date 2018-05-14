import TypedComponent from './components/TypedComponent.vue'

// Install the components
export function install (Vue) {
  Vue.component('typed', TypedComponent)
}

// Expose the components
export {
  TypedComponent,
}

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
