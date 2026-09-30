# Plugins Configurados

## astro-mermaid

Plugin para renderizar diagramas Mermaid no Markdown.

### Como usar

Adicione diagramas Mermaid usando a sintaxe padrão em seus arquivos Markdown:

```markdown
\`\`\`mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
\`\`\`
```

### Configuração

O plugin está configurado no `astro.config.mjs` com:
- `theme: 'neutral'` - tema neutro para os diagramas
- `autoTheme: true` - alterna automaticamente entre temas claro/escuro baseado no `data-theme` do site

## starlight-to-pdf

Ferramenta CLI para converter documentação Starlight em PDF.

### Como usar

Primeiro, você precisa ter o site rodando localmente ou publicado:

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Em outro terminal, gere o PDF
npm run pdf -- --url http://localhost:4321/fantodocs
```

### Opções principais

- `--url` ou `-u`: URL do site Starlight (obrigatório)
- `--filename` ou `-f`: Nome do arquivo PDF de saída
- `--exclude` ou `-e`: Páginas para excluir do PDF
- `--contents-name`: Nome personalizado para o índice
- `--contents-links`: Tipo de links no índice ('internal' ou 'external')

### Exemplos

```bash
# PDF básico
npm run pdf -- --url http://localhost:4321/fantodocs

# PDF com nome personalizado
npm run pdf -- --url http://localhost:4321/fantodocs --filename minha-documentacao.pdf

# PDF excluindo certas páginas
npm run pdf -- --url http://localhost:4321/fantodocs --exclude "/pt-br/arch/intro /pt-br/ai/intro"
```

### Requisitos

- Node.js v18 ou superior
- Navegador instalado (Chrome/Chromium recomendado)
