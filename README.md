# FantoDocs -> My Documentation website

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## >_ How it was created

```powershell

npm create astro@latest # Install latest astro option
# Choose the option starlight
npm install starlight-theme-galaxy  # Install the galaxy theme
npm i starlight-sidebar-topics # Add custom sidebar
npm install remark-math rehype-katex # latex usage

```

## >_ Project Structure

This is the structure of my Project documentation:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## >_ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| ------------------------ | ----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## >_ Want to learn more?

- Check out [Starlight’s docs](https://starlight.astro.build/).
- Read [the Astro documentation](https://docs.astro.build).
- Speak with [Astro Discord server](https://astro.build/chat).
- Starlight Galaxy [Documentation](https://frostybee.github.io/starlight-theme-galaxy/).
- Starlight [Icons](https://starlight.astro.build/reference/icons/).

## How to create new pages

- Add into the folder `src/content/docs/pt-br` or `src/content/docs/en-us` your folders and markdown files.
- Add the path to the new markdown file into the `astro.config.mjs` to show into the website the file to select.
