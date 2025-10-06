import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightVideos from 'starlight-videos';
import starlightKbd from 'starlight-kbd'

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
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
	integrations: [
		starlight({
			title: 'FantoDocs',
      customCss: ['./src/styles/custom.css'],
      components: {
        ProgressScroll: './src/components/EmptyProgressScroll.astro',
      },
      plugins: [
        starlightVideos(),
        starlightKbd(
          {
            types: [
              { id: 'mac', label: 'macOS'},
              { id: 'windows', label: 'Windows', default: true },
              { id: 'linux', label: 'Linux'},
            ],
          }),
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
              link: '/pt-br/markdown/intro',
              icon: 'seti:markdown',
              items: [
                'pt-br/markdown/notes',
                'pt-br/markdown/linkcard',
                'pt-br/markdown/filetree',
                'pt-br/markdown/steps',
                'pt-br/markdown/tabs',
                'pt-br/markdown/code',
                'pt-br/markdown/colors',
                'pt-br/markdown/videos',
                'pt-br/markdown/kbd',
                'pt-br/markdown/latex',
                'pt-br/markdown/unicode'],
            },
            {
              label: 'Estudos C#',
              link: '/pt-br/csharp/intro', 
              icon: 'seti:c-sharp',
              items: [
                {
                  label: 'Básico',
                  items: [
                    'pt-br/csharp/basic/intro',
                    'pt-br/csharp/basic/1-data-types',
                    'pt-br/csharp/basic/1-data-conversion',
                    'pt-br/csharp/basic/2-operators',
                    'pt-br/csharp/basic/3-ifelse',
                    'pt-br/csharp/basic/4-switch',
                    'pt-br/csharp/basic/5-for',
                    'pt-br/csharp/basic/6-while',
                    'pt-br/csharp/basic/7-do',
                    'pt-br/csharp/basic/8-functions',
                  ],
                },
                {
                  label: 'Orientação a Objetos',
                  items: [
                    'pt-br/csharp/object_oriented/intro',
                  ],
                },
                {
                  label: 'Estrutura de Dados',
                  items: [
                    'pt-br/csharp/data_structures/intro',
                  ],
                },
                {
                  label: 'SOLID',
                  items: [
                    'pt-br/csharp/solid/intro',
                  ],
                },
                {
                  label: 'Scripting',
                  items: [
                    'pt-br/csharp/scripting/intro'
                  ],
                },
              ],
            },
            {
              label: 'Estudos .NET',
              link: '/pt-br/dotnet/intro',
              icon: 'seti:powershell',
              items: [
                {
                  label: 'Sobre .NET',
                  items: [
                    'pt-br/dotnet/knowledge/runtime',
                  ],
                },
                {
                  label: 'MinimalAPIs',
                  items: [
                    'pt-br/dotnet/minimal-api/1-create-template',
                  ],
                },
              ],
            },
            {
              label: 'Estudos Spring',
              link: '/pt-br/spring/intro',
              icon: 'seti:spring',
              items: [
                {
                  label: 'Dependências',
                  items: [
                    'pt-br/spring/dependencies/surefire',
                  ],
                },
              ],
            },
            {
              label: 'Neovim IDE',
              link: '/pt-br/neovim/intro',
              icon: 'vim',
              items: [
                {
                  label: 'Config Inicial',
                  items: [
                    'pt-br/neovim/basic/install',
                  ],
                },
              ],
            },
            {
              label: 'Arch Linux',
              link: '/pt-br/arch/intro',
              icon: 'linux',
              items: [],
            },
            {
              label: 'AI',
              link: '/pt-br/ai/intro',
              icon: 'puzzle',
              items: [
                'pt-br/ai/llms',
                'pt-br/ai/prompt-eng'
              ],
            },
          ]),
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4NT0/fantodocs' }],
		}),
	],
});
