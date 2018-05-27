require('dotenv').config()
const client = require('./plugins/contentful')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/bulma.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/contentful',
    '~plugins/filters.js',
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/font-awesome'
  ],
  markdownit: {
    injected: true
  },
  generate: {
    routes () {
      return client.getEntries({
        'content_type': 'post'
      }).then(entries => {
        return entries.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          }
        })
      })
    }
  }
}
