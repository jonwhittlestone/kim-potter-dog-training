
const baseUrl = process.env.BASE_URL || 'https://www.kimpotterdogtraining.com'

export default {

  /*
   * Environment
   */
  env: {
    baseUrl
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dog behaviourist | Kim Potter (Dedicated to Dogs)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Does your dog have behavioural problems? Do you want an experienced dog behaviourist to help your pet? I offer home visits to make it easy for you and your pet. Kim Potter (Dedicated to Dogs) works with clients across Berkshire, Thames Valley, Oxford and London. Get in touch with me for more details.' },
      { hid: 'keywords', name: 'keywords', content: 'Dog behaviourist, Berkshire, Thames Valley, Oxford and London, Kim Potter (Dedicated to Dogs)' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Dog behaviourist | Kim Potter (Dedicated to Dogs)' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Does your dog have behavioural problems? Do you want an experienced dog behaviourist to help your pet? I offer home visits to make it easy for you and your pet. Kim Potter (Dedicated to Dogs) works with clients across Berkshire, Thames Valley, Oxford and London. Get in touch with me for more details.' },
      { hid: 'og:title', name: 'og:title', content: 'Dog behaviourist | Kim Potter (Dedicated to Dogs)' },
      { hid: 'og:description', name: 'og:description', content: 'Does your dog have behavioural problems? Do you want an experienced dog behaviourist to help your pet? I offer home visits to make it easy for you and your pet. Kim Potter (Dedicated to Dogs) works with clients across Berkshire, Thames Valley, Oxford and London. Get in touch with me for more details.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/vue-image-lightbox', mode:'client'},
    {src:'~/plugins/vue-social-sharing', mode:'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/axios',
      'nuxt-fontawesome', {
            imports: [
            {
              set: '@fortawesome/free-solid-svg-icons',
              icons: ['fas']
            },
            {
              set: '@fortawesome/free-regular-svg-icons',
              icons: ['far']
            },

          ]
        }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {

    transpile: [/vue-if-bot/, /^vue-cookieconsent-component(.*)?$/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
     linkActiveClass: 'active'
  }
}
