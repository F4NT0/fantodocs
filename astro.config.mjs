import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightVideos from 'starlight-videos';
import starlightKbd from 'starlight-kbd';
import mermaid from 'astro-mermaid';

const t = (pt, en) => ({ 'pt-BR': pt, 'pt-br': pt, 'en-US': en, 'en-us': en });

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
		mermaid({
			theme: 'neutral',
			autoTheme: true,
		}),
		starlight({
			title: 'FantoDocs',
      defaultLocale: 'pt-br',
      locales: {
        'pt-br': { label: 'PT-BR', lang: 'pt-BR' },
        'en-us': { label: 'EN-US', lang: 'en-US' },
      },
      pagination: false,
      tableOfContents: false,
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      markdown: {
        headingLinks: false,
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
        starlightCatppuccin({
          dark: { flavor: 'mocha', accent: 'mauve' },
          light: { flavor: 'latte', accent: 'mauve' },
        }),
        starlightSidebarTopics(
          [
            {
              label: t('Introdução', 'Introduction'),
              link: '/profile',
              icon: 'open-book',
              items: [
                'profile',
                'initial-page',
              ]
            },
            {
              label: 'Markdown',
              link: '/markdown/intro',
              icon: 'seti:markdown',
              items: [
                'markdown/notes',
                'markdown/badges',
                'markdown/mermaid',
                'markdown/linkcard',
                'markdown/filetree',
                'markdown/steps',
                'markdown/tabs',
                'markdown/code',
                'markdown/colors',
                'markdown/videos',
                'markdown/kbd',
                'markdown/latex',
                'markdown/unicode'],
            },
            {
              label: t('Estudos C#', 'C# Studies'),
              link: '/csharp/intro', 
              icon: 'seti:c-sharp',
              items: [
                {
                  label: 'Básico',
                  translations: { 'en-US': 'Basic' },
                  items: [
                    'csharp/basic/intro',
                    'csharp/basic/1-data-types',
                    'csharp/basic/1-data-conversion',
                    'csharp/basic/2-operators',
                    'csharp/basic/3-ifelse',
                    'csharp/basic/4-switch',
                    'csharp/basic/5-for',
                    'csharp/basic/6-while',
                    'csharp/basic/7-do',
                    'csharp/basic/8-functions',
                  ],
                },
                {
                  label: 'Orientação a Objetos',
                  translations: { 'en-US': 'Object-Oriented Programming' },
                  items: [
                    'csharp/object_oriented/intro',
                  ],
                },
                {
                  label: 'Estrutura de Dados',
                  translations: { 'en-US': 'Data Structures' },
                  items: [
                    'csharp/data_structures/intro',
                  ],
                },
                {
                  label: 'Programação Funcional',
                  translations: { 'en-US': 'Functional Programming' },
                  items: [
                    'csharp/functional/intro',
                    'csharp/functional/lambda',
                  ],
                },
                {
                  label: 'SOLID',
                  items: [
                    'csharp/solid/intro',
                  ],
                },
                {
                  label: 'Scripting',
                  translations: { 'en-US': 'Scripting' },
                  items: [
                    'csharp/scripting/intro'
                  ],
                },
              ],
            },
            {
              label: t('Estudos .NET', '.NET Studies'),
              link: '/dotnet/intro',
              icon: 'seti:powershell',
              items: [
                {
                  label: 'Sobre .NET',
                  translations: { 'en-US': 'About .NET' },
                  items: [
                    'dotnet/knowledge/runtime',
                  ],
                },
                {
                  label: 'Console Projects',
                  items: [
                    'dotnet/console-project/1-creating-project',
                  ],
                },
                {
                  label: 'MinimalAPIs',
                  items: [
                    'dotnet/minimal-api/1-create-template',
                  ],
                },
              ],
            },
            {
              label: 'Neovim IDE',
              link: '/neovim/intro',
              icon: 'vim',
              items: [
                {
                  label: 'Config Inicial',
                  translations: { 'en-US': 'Initial Setup' },
                  items: [
                    'neovim/basic/install',
                    'neovim/basic/basic-config',
                    'neovim/basic/shortcuts',
                  ],
                },
              ],
            },
            {
              label: t('Projetos', 'Projects'),
              link: '/projects/intro',
              icon: 'rocket',
              badge: { text: t('Novo', 'New'), variant: 'caution' },
              items: [
                'projects/intro',
                {
                  label: 'clidocs',
                  items: [
                    'projects/clidocs/intro',
                    'projects/clidocs/install',
                  ],
                },
              ],
            },
            {
              label: 'Arch Linux',
              link: '/arch/intro',
              icon: 'linux',
              items: [],
            },
            {
              label: 'AI',
              link: '/ai/intro',
              icon: 'puzzle',
              items: [
                'ai/llms',
                'ai/prompt-eng'
              ],
            },
          ]),
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4NT0/fantodocs' }],
		}),
	],
});
