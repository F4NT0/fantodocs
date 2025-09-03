// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FantoDocs',
      customCss: ['./src/styles/custom.css'],
      plugins: [ion()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4NT0/fantodocs' }],
			sidebar: [
        {
          label: 'Home',
          items: [
            { label: 'About Me', slug: 'home-doc'},
          ],
        },
        {
					label: 'C#',
				  items: [
            { label: 'Data Types', slug: 'csharp/data-types' },
          ],	
				},
				{
					label: '.NET',
          autogenerate: { directory: 'dotnet' },
				},
        {
          label: 'Linux',
          autogenerate: { directory: 'linux' },
        },
        {
          label: 'Powershell',
          autogenerate: { directory: 'powershell' },
        },
        {
          label: 'Java',
          autogenerate: { directory: 'java' },
        },
        {
          label: 'Windows Terminal',
          autogenerate: { directory: 'wt' },
        },
			],
		}),
	],
});
