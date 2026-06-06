1. Deployed VitePress in the terminal using the [official documentation](https://vitepress.dev/guide/getting-started)
- npm add -D vitepress@next
- npx vitepress init
- npm run docs:dev  

Now working in GitHub Codespaces
  
2. Added "custom.css" for a black theme (sometimes I use F12 to find names to search on [vars](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css))
```css
.dark {
  --vp-c-bg: #000000;
  --vp-c-bg-alt: #000000;
  --vp-c-bg-elv: #000000;
  --vp-c-bg-soft: #000000;
  --vp-code-block-bg: #070707;

}

:root {
  --vp-home-hero-name-color: rgb(122, 164, 180);
}
```
