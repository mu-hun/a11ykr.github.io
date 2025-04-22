import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://a11ykr.github.io/',
  // base: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
  base: '/',
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
    sitemap()
  ],
  locale: 'ko',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})