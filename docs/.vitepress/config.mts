import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/project',
  title: "CS20",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Journal', link: '/Journal-JS' },
      { text: 'Codes', link: '/Codes' },
      { text: 'Changes', link: '/Changes' }
    ],

    sidebar: [
      {
        text: 'Project',
        items: [
          { text: 'Codes', link: '/Codes' },
          { text: 'Changes', link: '/Changes' }
        ]
      },
      {
        text: 'Journals',
        items: [
          { text: 'Journal JS', link: '/Journal-JS' },
          { text: 'Journal HTML', link: '/Journal-HTML' },
          { text: 'Journal CSS', link: '/Journal-CSS' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maksk10/project' }
    ]
  }
})
