# vue-typed-js

[![npm](https://img.shields.io/npm/v/vue-typed-js.svg) ![npm](https://img.shields.io/npm/dm/vue-typed-js.svg)](https://www.npmjs.com/package/vue-typed-js)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js Plugin

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-typed-js
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
```

Use specific components:

```javascript
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'

Vue.component('vue-typed-js', VueTypedJs)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'vue-typed-js/dist/vue-typed-js.css'
import VueTypedJs from 'vue-typed-js/dist/vue-typed-js.common'

Vue.use(VueTypedJs)
```

## Browser

```html
<link rel="stylesheet" href="vue-typed-js/dist/vue-typed-js.css"/>

<script src="vue.js"></script>
<script src="vue-typed-js/dist/vue-typed-js.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(VueTypedJs)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js/src'

Vue.use(VueTypedJs)
```

# Usage

> TODO

# Example

> TODO

---

# License

[MIT](http://opensource.org/licenses/MIT)
