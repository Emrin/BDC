export default {
  target: 'static',
  ssr: true,
  head: {
    title: 'BDC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  generate: {
    fallback: false,
    routes: ['/', '404']
  },

  loading: { continuous: true, color: '#2cbcc7' },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

// // DEV MODE with HMR on Docker:
// // 1. Delete node_modules (and maybe yarn.lock) because Linux
// // docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --env HOST=0.0.0.0
// // --env PORT=3000 node:alpine sh -c "yarn install && yarn dev"
// // And have this set to fix HMR.
// watchers: {
//   webpack: {
//     aggregateTimeout: 300,
//     poll: 1000
//   }
// },

// // PROD MODE on K8S:
// // 1. Build a prod image with Dockerfile (and dockerignore)
// // 2. Create a YAML file for its deployment and service
// // 3. kubectl apply -f frontend.yaml
