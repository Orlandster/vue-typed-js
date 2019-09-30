export const props = {
  strings: {
    type: Array,
    required: false,
    default: function () {
      return [ 'Hello World!' ]
    },
  },
  stringsElement: {
    type: String,
    required: false,
    default: null,
  },
  typeSpeed: {
    type: Number,
    required: false,
    default: 50,
  },
  startDelay: {
    type: Number,
    required: false,
    default: 0,
  },
  backSpeed: {
    type: Number,
    required: false,
    default: 0,
  },
  smartBackspace: {
    type: Boolean,
    required: false,
    default: true,
  },
  shuffle: {
    type: Boolean,
    required: false,
    default: false,
  },
  backDelay: {
    type: Number,
    required: false,
    default: 700,
  },
  fadeOut: {
    type: Boolean,
    required: false,
    default: false,
  },
  fadeOutClass: {
    type: String,
    required: false,
    default: 'typed-fade-out',
  },
  fadeOutDelay: {
    type: Number,
    required: false,
    default: 500,
  },
  loop: {
    type: Boolean,
    required: false,
    default: false,
  },
  loopCount: {
    type: Number,
    required: false,
    default: Infinity,
  },
  showCursor: {
    type: Boolean,
    required: false,
    default: true,
  },
  cursorChar: {
    type: String,
    required: false,
    default: '|',
  },
  autoInsertCss: {
    type: Boolean,
    required: false,
    default: true,
  },
  attr: {
    type: String,
    required: false,
    default: null,
  },
  bindInputFocusEvents: {
    type: Boolean,
    required: false,
    default: false,
  },
  contentType: {
    type: String,
    required: false,
    default: 'html',
  },
}

export const getEventHandlers = (context, typedConfig) => {
  typedConfig.onComplete = () => {
    context.$emit('onComplete')
  }

  typedConfig.preStringTyped = (arrayPos) => {
    context.$emit('preStringTyped', arrayPos)
  }

  typedConfig.onStringTyped = (arrayPos) => {
    context.$emit('onStringTyped', arrayPos)
  }

  typedConfig.onLastStringBackspaced = () => {
    context.$emit('onLastStringBackspaced')
  }

  typedConfig.onTypingPaused = (arrayPos) => {
    context.$emit('onTypingPaused', arrayPos)
  }

  typedConfig.onTypingResumed = (arrayPos) => {
    context.$emit('onTypingResumed', arrayPos)
  }

  typedConfig.onReset = () => {
    context.$emit('onReset')
  }

  typedConfig.onStop = (arrayPos) => {
    context.$emit('onStop', arrayPos)
  }

  typedConfig.onStart = (arrayPos) => {
    context.$emit('onStart', arrayPos)
  }

  typedConfig.onDestroy = () => {
    context.$emit('onDestroy')
  }

  return typedConfig
}
