import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',

  generate: {
    dir: 'public'
  },

  head: {
    title: 'kronhyx',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Senior Software Developer & DevOps Engineer'
      }
    ],
    bodyAttrs: {
      class: 'dark-mode'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },

  css: [
    '@/assets/style/style'
  ],

  plugins: [
    {
      src: '@/plugins/typer',
      mode: 'client'
    }
  ],

  components: true,

  buildModules: [
    ['@nuxt/typescript-build', {}]
  ],

  modules: [
    ['bootstrap-vue/nuxt', {
      bootstrapCSS: true,
      bootstrapVueCSS: false
    }],
    ['@nuxtjs/axios', {}],
    ['@nuxtjs/pwa', {}],
    ['@nuxt/content', {}]
  ],

  axios: {},

  content: {},

  build: {}
}

export default config
