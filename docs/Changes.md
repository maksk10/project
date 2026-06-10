1. Deployed VitePress in the terminal using the [official documentation](https://vitepress.dev/guide/getting-started)
- npm add -D vitepress@next
- npx vitepress init
- npm run docs:dev
  
2. Added "custom.css" for a black theme (sometimes I use F12 to find names to search on [vars](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css))
```css
.dark {
  --vp-c-bg: #080808;
  --vp-c-bg-alt: #080808;
  --vp-c-bg-elv: #080808;
  --vp-c-bg-soft: #080808;
  --vp-code-block-bg: #0f0f0f ;

}

:root {
  --vp-home-hero-name-color: rgb(122, 164, 180);
}
```
3. Added icons by using const and svgs from https://fonts.google.com/icons
4. Added search
```
search: {
provider: 'local'
}
```
5. Added to the top of the journals
```
---
outline: deep
---
```
So that the categories on the right display all levels: #, ##, ### or headers