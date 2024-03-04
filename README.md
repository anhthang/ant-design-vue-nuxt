<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Ant Design Vue Nuxt
- Package name: @buianhthang/nuxt
- Description: My new Nuxt module
-->

# Ant Design Vue Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Ant Design Vue](https://www.antdv.com) module for [Nuxt](https://nuxt.com/)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@buianhthang/nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ &nbsp;Automatically import components on demand.
- ✨ &nbsp;Automatically import icons from [@buianhthang/icons-vue](https://github.com/anhthang/ant-design-icons/tree/master/packages/icons-vue).
- ✨ &nbsp;Automatically import of message, notification and Modal methods.

## Quick Setup

1. Add `@buianhthang/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @buianhthang/nuxt

# Using yarn
yarn add --dev @buianhthang/nuxt

# Using npm
npm install --save-dev @buianhthang/nuxt
```

2. Add `@buianhthang/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@buianhthang/nuxt'
  ],
  antd:{
    // Options
  }
})
```

That's it! You can now use ant-design-vue in your Nuxt app ✨


## Usage

[Online Playground](https://stackblitz.com/~/github.com/antdv-pro/antdv-nuxt-starter)

```vue
<script lang="ts" setup>
const handleMessage = () => {
  message.info("This is a normal message");
}
</script>
<template>
  <a-button @click="handleMessage">
    button
  </a-button>
</template>
```
Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Options

### components

* Type: `array` | 'false'

If there are components that are not imported automatically from Ant Design Vue, you need to add the component name here.

e.g.`['Button']`

### imports

* Type: `array`

If you wish to add automatically import content from Ant Design Vue, you can add it here.

### icons

* Type: `array` | 'false'

If there are components that are not imported automatically from @buianhthang/icons-vue, you need to add the component name here.


### extractStyle (1.4.1)

* Type: `boolean`

> Solve page css flicker problem

Extracts and injects css on demand, defaults to false

```vue
<!-- If the extractStyle option is enabled, we can use a-extract-style on the outermost level of the template in app.vue -->
<template>
  <a-extract-style>
    <!-- Your page or component -->
  </a-extract-style>
</template>
```


## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Build for production
npm run build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@buianhthang/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@buianhthang/nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@buianhthang/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@buianhthang/nuxt

[license-src]: https://img.shields.io/npm/l/@buianhthang/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@buianhthang/nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
