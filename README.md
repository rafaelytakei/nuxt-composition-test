# nuxt-composition-test

## What's been added on this boilerplate

- [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/) - Vue 3's Composition API in NuxtJS
  - Composition API improves code reusability
  - Brings some TypeScript support to Vue 2
- [TypeScript](https://typescript.nuxtjs.org/) - Microsoft's TypeScript
  - Allows Typing to help preventing various errors
- [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup) - Vue 3.2 Script Setup syntax for SFC's in Vue 2
  - Removes a lot of bloat from the script section of SFC's
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto Imports API's on-demand
  - QoL plugin for Composition API: removes the need to import from `@nuxtjs/composition-api` on every usage
- [Pinia](https://pinia.esm.dev/) - Vuex alternative with Composition API-like syntax and TS support
  - It works way better than Vuex for usage with Composition API

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store` - IMPORTANT CHANGES (-Vuex; +Pinia)

This directory contains the [Pinia](https://pinia.esm.dev/) store files.

- Why not Vuex?
  - Doesn't integrate well with Composition API nor TS
- Why Pinia?
  - Good Composition API/TS support
  - Vuex 5 will be built based on Pinia, so should be an easy transition if necessary later on
