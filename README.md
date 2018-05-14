# vue-typed-js

[![npm](https://img.shields.io/npm/v/vue-typed-js.svg) ![npm](https://img.shields.io/npm/dm/vue-typed-js.svg)](https://www.npmjs.com/package/vue-typed-js)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8789841c45264d19ad2595061437a8a9)](https://www.codacy.com/app/orlando.wenzinger/vue-typed-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Orlandster1998/vue-typed-js&amp;utm_campaign=Badge_Grade)

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

Install the component:

```javascript
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'

Vue.use(VueTypedJs)
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

The `typing` class also allows you to just animate certain parts of a string:
```html
<vue-typed-js :strings="['John', 'James']">
  <h1>Hey <span class="typing"></span></h1>
</vue-typed-js>
```

## Properties
You can make use of the following properties in order to customize your typing expirience:

| Property             | Type    | Description                                                          | Usage                                                           |
|----------------------|---------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| strings              | Array   | strings to be typed                                                  | `:strings="['Text 1', 'Text 2']"` |
| stringsElement       | String  | ID of element containing string children                             | `:stringsElement="'myId'"`                                                                |
| typeSpeed            | Number  | type speed in milliseconds                                           | `:typeSpeed="50"`                                                                |
| startDelay           | Number  | time before typing starts in milliseconds                            | `:startDelay="1000"`                                                                |
| backSpeed            | Number  | backspacing speed in milliseconds                                    | `:backSpeed="10"`                                                                |
| smartBackspace       | Boolean | only backspace what doesn't match the previous string                | `:smartBackspace="true"`                                                                |
| shuffle              | Boolean | shuffle the strings                                                  | `:shuffle="true"`                                                                |
| backDelay            | Number  | time before backspacing in milliseconds                              | `:backDelay="100"`                                                                |
| fadeOut              | Boolean | Fade out instead of backspace                                        | `:fadeOut="true"`                                                                |
| fadeOutClass         | String  | css class for fade animation                                         | `:fadeOutClass="'fadeOutClass'"`                                                                |
| fadeOutDelay         | Boolean | fade out delay in milliseconds                                       | `:fadeOutDelay="true"`                                                                |
| loop                 | Boolean | loop strings                                                         | `:loop="true"`                                                                |
| loopCount            | Number  | amount of loops                                                      | `:loopCount="3"`                                                                |
| showCursor           | Boolean | show cursor                                                          | `:showCursor="true"`                                                                |
| cursorChar           | String  | character for cursor                                                 | `:cursorChar="'_'"`                                                                |
| autoInsertCss        | Boolean | insert CSS for cursor and fadeOut into HTML                          | `:autoInsertCss="true"`                                                                |
| attr                 | String  | attribute for typing Ex: input placeholder, value, or just HTML text | `:attr="'placeholder'"`                                                                |
| bindInputFocusEvents | Boolean | bind to focus and blur if el is text input                           | `:bindInputFocusEvents="true"`                                                                |
| contentType          | String  | 'html' or 'null' for plaintext                                       | `:contentType="'html'"`                                                                |

## Events
You can listen to the following events:

| Event                  | Description                                                          | Usage                                                           |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| onComplete             | All typing is complete                                               | `@onComplete="doSmth()"` |
| preStringTyped         | Before each string is typed                                          | `@preStringTyped="doSmth()"`                                                                |
| onStringTyped          | After each string is typed                                           | `@onStringTyped="doSmth()"`                                                                |
| onLastStringBackspaced | During looping, after last string is typed                           | `@onLastStringBackspaced="doSmth()"`                                                                |
| onTypingPaused         | Typing has been stopped                                              | `@onTypingPaused="doSmth()"`                                                                |
| onTypingResumed        | Typing has been started after being stopped                          | `@onTypingResumed="doSmth()"`                                                                |
| onReset                | After reset                                                          | `@onReset="doSmth()"`                                                                |
| onStop                 | After stop                                                           | `@onStop="doSmth()"`                                                                |
| onStart                | After start                                                          | `@onStart="doSmth()"`                                                                |
| onDestroy              | After destroy                                                        | `@onDestroy="doSmth()"`                                                                |
## Features
Checkout features like `type pausing`, `smart backspacing` etc. on the libraries [page](https://github.com/mattboldt/typed.js/).

# Examples
Here are several examples:

```html
<!-- infinite loop -->
<vue-typed-js :strings="['awesome', 'brilliant']" :loop="true" @onComplete="doSmth()">
  <h2>We are a <span class="typing"></span> company!</h2>
</vue-typed-js>

<!-- type pausing -->
<vue-typed-js :strings="['This is text ^1000 which gets paused for 1 second', 'wow, interesting']">
  <h2 class="typing"></h2>
</vue-typed-js>

<!-- output html -->
<vue-typed-js :strings="['<p>Paragraph</p>', '<span>Span</span>']" :contentType="'html'">
  <h2 class="typing"></h2>
</vue-typed-js>
```

---

# License

[MIT](http://opensource.org/licenses/MIT)
