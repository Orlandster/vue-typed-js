# vue-typed-js

[![npm](https://img.shields.io/npm/v/vue-typed-js.svg) ![npm](https://img.shields.io/npm/dm/vue-typed-js.svg)](https://www.npmjs.com/package/vue-typed-js)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js integration for Typed.js. 

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

Checkout the offical project [here](https://github.com/mattboldt/typed.js/).

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

## Browser import

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

# Usage
To get started simply add the `vue-typed-js` custom element to your `template` and pass the text, which should be typed to the `strings` property. In addition you need to pass an element with the class `typing` to the slot, which will be used as a `wrapper`.

Minimal setup:

```html
<vue-typed-js :strings="['First text', 'Second Text']">
  <h1 class="typing"></h1>
</vue-typed-js>
```

The `typing` class allows you to just animate certain parts of a string:
```html
<vue-typed-js :strings="['John', 'James']">
  <h1>Hey <span class="typing"></span></h1>
</vue-typed-js>
```

## Properties
You can make use of the following properties in order to customize your typing expirience:

| Property             | Type    | Description                                                          | Usage                                                           |
|----------------------|---------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| strings              | Array   | strings to be typed                                                  | `<vue-typed-js :strings="['Text 1', 'Text 2']"></vue-typed-js>` |
| stringsElement       | String  | ID of element containing string children                             | `<vue-typed-js :stringsElement="'myId'"></vue-typed-js>`                                                                |
| typeSpeed            | Number  | type speed in milliseconds                                           | `<vue-typed-js :typeSpeed="50"></vue-typed-js>`                                                                |
| startDelay           | Number  | time before typing starts in milliseconds                            | `<vue-typed-js :startDelay="1000"></vue-typed-js>`                                                                |
| backSpeed            | Number  | backspacing speed in milliseconds                                    | `<vue-typed-js :backSpeed="10"></vue-typed-js>`                                                                |
| smartBackspace       | Boolean | only backspace what doesn't match the previous string                | `<vue-typed-js :smartBackspace="true"></vue-typed-js>`                                                                |
| shuffle              | Boolean | shuffle the strings                                                  | `<vue-typed-js :shuffle="true"></vue-typed-js>`                                                                |
| backDelay            | Number  | time before backspacing in milliseconds                              | `<vue-typed-js :backDelay="100"></vue-typed-js>`                                                                |
| fadeOut              | Boolean | Fade out instead of backspace                                        | `<vue-typed-js :fadeOut="true"></vue-typed-js>`                                                                |
| fadeOutClass         | String  | css class for fade animation                                         | `<vue-typed-js :fadeOutClass="'fadeOutClass'"></vue-typed-js>`                                                                |
| fadeOutDelay         | Boolean | fade out delay in milliseconds                                       | `<vue-typed-js :fadeOutDelay="true"></vue-typed-js>`                                                                |
| loop                 | Boolean | loop strings                                                         | `<vue-typed-js :loop="true"></vue-typed-js>`                                                                |
| loopCount            | Number  | amount of loops                                                      | `<vue-typed-js :loopCount="3"></vue-typed-js>`                                                                |
| showCursor           | Boolean | show cursor                                                          | `<vue-typed-js :showCursor="true"></vue-typed-js>`                                                                |
| cursorChar           | String  | character for cursor                                                 | `<vue-typed-js :cursorChar="'_'"></vue-typed-js>`                                                                |
| autoInsertCss        | Boolean | insert CSS for cursor and fadeOut into HTML                          | `<vue-typed-js :autoInsertCss="true"></vue-typed-js>`                                                                |
| attr                 | String  | attribute for typing Ex: input placeholder, value, or just HTML text | `<vue-typed-js :attr="'placeholder'"></vue-typed-js>`                                                                |
| bindInputFocusEvents | Boolean | bind to focus and blur if el is text input                           | `<vue-typed-js :bindInputFocusEvents="true"></vue-typed-js>`                                                                |
| contentType          | String  | 'html' or 'null' for plaintext                                       | `<vue-typed-js :contentType="'html'"></vue-typed-js>`                                                                |


## Events

# Example

> TODO

---

# License

[MIT](http://opensource.org/licenses/MIT)
