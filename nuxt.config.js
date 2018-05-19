module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'xero-service-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'vZLCleT2gF5ttPETevrThNF5zyby1ZFozC4NlD9Ycs4' },
      { name: 'keywords', content: '技術顧問, ソフトウェア開発， インフラ構築， スタートアップ'},
      { hid: 'description', name: 'description', content: 'XERO' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' }
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
  css: [
    '~assets/css/reset.css'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-119380582-1'
    }]
  ]
}
