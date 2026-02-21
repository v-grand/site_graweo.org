# 📚 Project Structure Documentation

Complete overview of the Graweo project file structure and organization.

---

## Directory Tree

```
site_graweo.org/
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── common/              # Reusable components
│   │   │   └── UserNotRegisteredError.js
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Layout.js
│   │   └── ui/                  # UI components
│   │       ├── Button.js
│   │       ├── Card.js
│   │       ├── Modal.js
│   │       └── LanguageSwitcher.js
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Reports.js
│   │   ├── ReportDetail.js
│   │   ├── Donate.js
│   │   └── Contacts.js
│   │
│   ├── content/                 # Content management
│   │   └── locales/            # Translations by language
│   │       ├── en/             # English content
│   │       │   ├── home.json
│   │       │   ├── about.json
│   │       │   ├── reports.json
│   │       │   ├── donate.json
│   │       │   ├── contacts.json
│   │       │   ├── header.json
│   │       │   └── footer.json
│   │       └── ru/             # Russian content
│   │           ├── home.json
│   │           ├── about.json
│   │           ├── reports.json
│   │           ├── donate.json
│   │           ├── contacts.json
│   │           ├── header.json
│   │           └── footer.json
│   │
│   ├── context/                # React Context
│   │   └── LanguageContext.js
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useContent.js
│   │
│   ├── utils/                  # Utility functions
│   │   └── contentLoader.js
│   │
│   ├── config/                 # Configuration files
│   │   ├── languages.js
│   │   └── routes.js
│   │
│   ├── styles/                 # Global styles
│   │   └── index.css
│   │
│   ├── index.js               # Application entry point
│   └── index.html             # HTML template
│
├── public/                      # Static assets
│   ├── index.html
│   └── [images, icons, etc.]
│
├── dist/                        # Build output (generated)
│   ├── index.html
│   ├── [js files]
│   └── [css files]
│
├── node_modules/               # Dependencies (git ignored)
│
├── .git/                        # Git repository
├── .gitignore                   # Git ignore rules
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Locked dependency versions
│
└── Documentation
    ├── ADMIN_GUIDE.md           # Complete admin documentation
    ├── QUICK_START.md           # Quick reference guide
    ├── STRUCTURE.md             # This file
    ├── DEPLOYMENT.md            # Deployment instructions
    └── README.md                # Project overview
```

---

## Component Structure Explained

### Layout Components (`src/components/layout/`)
Components that provide page structure and persistent UI elements.

```
Layout.js
  ├── Header.js (from layout folder)
  ├── Main Content (children)
  └── Footer.js (from layout folder)
```

**Usage**: Wraps all pages with header and footer.

### UI Components (`src/components/ui/`)
Reusable building blocks for user interfaces.

- `Button.js` - Styled button component
- `Card.js` - Content card component
- `Modal.js` - Modal dialog component
- `LanguageSwitcher.js` - Language selection component

**Usage**: Import and use in any page or component.

### Common Components (`src/components/common/`)
Application-specific reusable components.

- `UserNotRegisteredError.js` - Error state for unregistered users

**Usage**: Import where needed for error handling.

---

## Content Structure Explained

### Location: `src/content/locales/{language}/`

Each language folder contains JSON files matching the page names:

```
locales/
├── en/
│   ├── home.json         # Content for / route
│   ├── about.json        # Content for /about route
│   ├── reports.json      # Content for /reports route
│   ├── donate.json       # Content for /donate route
│   ├── contacts.json     # Content for /contacts route
│   ├── header.json       # Header content
│   └── footer.json       # Footer content
│
└── ru/
    └── [same files as en/, translated]
```

### JSON Content Format

```json
{
  "title": "Page Title",
  "meta": {
    "description": "SEO description",
    "keywords": "keyword1, keyword2"
  },
  "sections": {
    "hero": {
      "title": "Section Title",
      "subtitle": "Subtitle",
      "cta": "Call to Action"
    },
    "features": {
      "items": [
        { "title": "Item 1", "description": "..." }
      ]
    }
  }
}
```

### Using Content in Components

```jsx
import { useContent } from '../hooks/useContent';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function MyPage() {
  const { language } = useContext(LanguageContext);
  const { content, t } = useContent('page-name', language);

  return (
    <h1>{t('title')}</h1>
  );
}
```

---

## Configuration Files

### `src/config/languages.js`
Defines available languages and their display names.

```js
export const LANGUAGES = {
  EN: 'en',
  RU: 'ru',
  // Add more languages here
};

export const LANGUAGE_NAMES = {
  en: 'English',
  ru: 'Русский',
  // Add translations of language names
};
```

### `src/config/routes.js`
Central routing configuration for all pages.

```js
export const ROUTES = [
  {
    path: '/page-path',
    element: PageComponent,
    name: 'routeName',
    showInNav: true,  // Show in navigation
    order: 1,         // Navigation order
  },
];
```

---

## Hooks and Utilities

### `src/hooks/useContent.js`
Custom React hook for loading page content.

```jsx
const { content, loading, error, t } = useContent('page-name', language);
```

### `src/utils/contentLoader.js`
Utilities for loading and accessing content:

- `loadContent(pageName, language)` - Load JSON content
- `getTranslation(content, key)` - Get nested values
- `clearContentCache()` - Clear loaded content cache

---

## Adding Files to Project

### Adding a New Page
1. Create component: `src/pages/NewPage.js`
2. Register in: `src/config/routes.js`
3. Add content: `src/content/locales/en/new-page.json`
4. Add translation: `src/content/locales/ru/new-page.json`

### Adding a New Language
1. Update: `src/config/languages.js`
2. Create folder: `src/content/locales/{lang}/`
3. Copy and translate all JSON files

### Adding a New Component
1. Create in `src/components/{type}/ComponentName.js`
2. Import in pages/components that use it
3. Keep single responsibility

### Adding a New Utility
1. Create in `src/utils/utilityName.js`
2. Export functions clearly
3. Document usage in comments

---

## Static Assets

### Location: `public/`

Place all static files here:
- Images (`.jpg`, `.png`, `.webp`, `.svg`)
- Icons
- Fonts
- PDFs
- Manifests

Access in code:
```jsx
<img src={`${process.env.PUBLIC_URL}/image.jpg`} />
```

---

## Build Output

### Location: `dist/`

Generated during `npm run build`:
- Minified JavaScript files
- Optimized CSS
- Bundled assets
- `index.html` entry point

**Note**: This folder is git-ignored and generated fresh each build.

---

## Git Structure

### Important Files
- `.gitignore` - Files to ignore
- `package.json` - Project metadata
- `package-lock.json` - Locked versions (removed from git)

### Branches
- `main` - Production branch
- `claude/analyze-graweo-site-*` - Development branch

---

## File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `MyComponent.js` |
| Pages | PascalCase | `HomePage.js` |
| Utilities | camelCase | `contentLoader.js` |
| Hooks | camelCase | `useContent.js` |
| Content JSON | kebab-case | `my-page.json` |
| CSS Classes | kebab-case | `my-class` |
| Config files | camelCase | `languages.js` |

---

## Quick Reference

| I want to... | File location |
|-------------|--------------|
| Change page text | `src/content/locales/{lang}/{page}.json` |
| Create page | `src/pages/` + `src/config/routes.js` |
| Add language | `src/config/languages.js` + `src/content/locales/` |
| Create UI component | `src/components/ui/` |
| Add utility | `src/utils/` |
| Change global styles | `src/styles/` |
| Store images | `public/` |
| Add React hook | `src/hooks/` |

---

## Related Documentation

- **ADMIN_GUIDE.md** - Complete administration guide
- **QUICK_START.md** - Quick reference for common tasks
- **DEPLOYMENT.md** - How to deploy changes

---

**Last Updated**: February 2026
**Version**: 1.0
