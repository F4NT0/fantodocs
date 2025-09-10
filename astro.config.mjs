// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
  site: 'https://f4nt0.github.io',
  base: '/fantodocs',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
	integrations: [
		starlight({
			title: 'FantoDocs',
      customCss: ['./src/styles/custom.css'],
      plugins: [
        ion(),
        starlightSidebarTopics(
          [
            {
              label: 'Português',
              link: '/pt-br/',
              icon: 'open-book',
              items: [
                {
                  label: 'whoami',
                  items: ['pt-br/home-doc', 'pt-br/markdown-tests'],
                },
                {
                  label: 'C#',
                  items: ['pt-br/csharp/data-types'],
                },
              ],
            },
            {
              label: 'Inglês',
              link: '/en-us/',
              icon: 'open-book',
              items: [
                {
                  label: 'whoami',
                  items: ['en-us/home-doc'],
                },
                {
                  label: 'C#',
                  items: ['en-us/csharp/data-types'],
                },
              ],
            },
          ]),
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4NT0/fantodocs' }],
		}),
	],
});
