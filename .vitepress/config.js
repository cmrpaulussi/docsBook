import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Documentação Book Digital Liz',
  description: 'Docs Book Digital Liz',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Book Liz',
        items: [
          { text: 'Páginas', link: '/paginas' },
          { text: 'Componentes e Mixins', link: '/componentes-e-mixins' },
          { text: "API's", link: '/apis' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CMR-INDUSTRIA/WebBookDigital',
      },
    ],
  },
})
