# 📚 Vocabulary Trainer

A modern, responsive web application designed to help students learn English vocabulary in an interactive and engaging way. Built with Astro.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **📱 Responsive Design**: Optimized for both mobile and desktop viewing
- **🎨 Modern UI**: Beautiful, clean interface with smooth transitions
- **📝 Markdown-Based**: Easy-to-manage vocabulary words stored in markdown files
- **🏷️ Categorized Learning**: Organize words by categories (Nouns, Verbs, Adjectives, etc.)
- **💪 Difficulty Levels**: Track word difficulty (easy, medium, hard)
- **📖 Rich Content**: Each word includes translations, examples, definitions, and synonyms
- **⚡ Fast Performance**: Built with Astro for optimal loading speed
- **🔍 SEO Friendly**: Optimized for search engines

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tobiaswittenburg/ATSSummitMunich2026.git
cd ATSSummitMunich2026
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production site
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

### Project Structure

```
/
├── public/              # Static assets (favicon, images, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/
│   │   ├── config.ts    # Content collection configuration
│   │   └── vocabulary/  # Vocabulary markdown files
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro # Main layout template
│   └── pages/           # Page routes
│       ├── index.astro  # Home page
│       └── vocabulary/
│           └── [slug].astro  # Dynamic vocabulary pages
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 📝 Adding Vocabulary Words

To add new vocabulary words, create a markdown file in `src/content/vocabulary/`:

```markdown
---
word: "Example"
translation: "Beispiel"
category: "Nouns"
difficulty: "easy"
examples:
  - "This is an example sentence."
  - "Can you give me another example?"
---

## Definition

Your word definition goes here...

## Usage

Explain how to use the word...

## Synonyms

- Similar word 1
- Similar word 2
```

### Frontmatter Fields

- `word` (required): The English word
- `translation` (required): German translation
- `category` (optional): Word category (e.g., "Nouns", "Verbs", "Adjectives")
- `difficulty` (optional): "easy", "medium", or "hard"
- `examples` (optional): Array of example sentences

## 🎨 Customization

### Tailwind Colors

The project uses a custom color scheme defined in `tailwind.config.mjs`. You can modify the primary color palette to match your preferences:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize these values
      },
    },
  },
},
```

### Layout

Modify `src/layouts/Layout.astro` to change the overall page structure, meta tags, or global styles.

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🚀 Deployment

This site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Cloudflare Pages**: Connect your repository for edge deployment

## 🛡️ Technologies Used

- [Astro](https://astro.build) - Web framework for content-focused websites
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## 📄 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

This project was created to help students learn English vocabulary effectively.

---

**Happy Learning! 📚✨**
