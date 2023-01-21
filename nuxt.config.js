export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Jack Murray-Brown',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hi, I'm Jack and welcome to my website. I'm a developer, artist and radio enthusiast, focussed on accessibility, sustainability and community engaged projects. Currently Based in Berlin" },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/typography.css',
    '@/assets/css/transitions.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/vue-lazy-image.js', ssr: false},
    {src: '~plugins/vue-pswipe', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  // generate: {
  //   routes: function() {
  //     const fs = require('fs')
  //     return fs.readdirSync('./content/work').map(file => {
  //       return {
  //         route: `/work/${file.slice(2, -5)}`,
  //         payload: require(`./content/work/${file}`)
  //       }
  //     })
  //   }
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  ignore: [
    'pages/index-leave-for-now.vue',
    'pages/index-old.vue',
    // 'pages/the-one.vue',
    'pages/cv.vue',
    'pages/captcha.vue'
  ]
}
