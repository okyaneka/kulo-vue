# Kulo Vue

An vue boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### How to commit

1. Cek kodenya dengan melakukan npm run lint
2. Fix kode kalau ada yang salah
3. Commit kode dengan format "{action}: {pesan commit}" semua lowercase kecuali kutipan (yand ada di dalam tanda kutip), contoh: "slice: halaman dashboard"

### Format/struktur penamaan file

```
src
|–– assets
|   |–– images
|   |–– videos
|   |–– styles
|–– components
|   |–– {component-class}
|   |   |–– {component-class}
|   |   |   |–– ${project-title}-{component-class}-{component-name}.vue
|   |   |–– ${project-title}-{component-name}.vue
|–– lang
|   |–– ${lang-code}
|   |   |–– ${lang-class}.js
|   |–– index.js
|–– plugins
|   |–– ${plugin-name}-plugin.js
|–– mixins
|   |–– ${mixin-name}-mixin.js
|–– views
|   |—— layouts
|   |   |—— ${layout-name}-layout.vue
|   |–– public
|   |   |–– ${view-class}
|   |   |   |–– ${view-class}-{view-name}.vue
|   |–– private
|   |   |–– ${view-class}
|   |   |   |–– ${view-class}-{view-name}.vue
|   |–– index.js 
|–– routes
|   |–– ${route-class}-route.js
|   |–– index.js
|–– stores
|   |–– ${store-class}-store.js
|–– main.js
|–– app.vue
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
