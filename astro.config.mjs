import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
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
      components: {
        ProgressScroll: './src/components/EmptyProgressScroll.astro',
      },
      plugins: [
        starlightThemeGalaxy(),
        starlightSidebarTopics(
          [
            {
              label: 'Sobre mim',
              link: '/pt-br/home-doc',
              icon: 'open-book',
              items: [
                'pt-br/home-doc',
              ]
            },
            {
              label: 'Markdown',
              link: '/pt-br/markdown/markdown-tests',
              icon: 'seti:markdown',
              items: ['pt-br/markdown/markdown-tests'],
            },
            {
              label: 'Estudos C#',
              link: '/pt-br/csharp/intro', 
              icon: 'seti:c-sharp',
              items: [
                {
                  label: 'Básico',
                  items: [
                    'pt-br/csharp/data-types',
                    'pt-br/csharp/primitive-types',
                    'pt-br/csharp/operators',
                    'pt-br/csharp/ifelse',
                    'pt-br/csharp/switch',
                    'pt-br/csharp/for',
                    'pt-br/csharp/while'
                  ],
                },
                {
                  label: 'Orientação a Objetos',
                  items: [],
                },
                {
                  label: 'SOLID',
                  items: [],
                },
              ],
            },
            {
              label: 'Estudos .NET',
              link: '/pt-br/dotnet/intro',
              icon: 'seti:powershell',
              items: [
                {
                  label: 'MinimalAPIs',
                  items: [
                    'pt-br/dotnet/minimal-api/1-create-template',
                  ],
                },
              ],
            },
          ]),
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4NT0/fantodocs' }],
		}),
	],
});
