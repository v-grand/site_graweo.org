# 📋 Site Administration Guide - Graweo.org

> Complete guide for managing, updating, and scaling the Graweo site.

---

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── common/             # Reusable components (UserNotRegisteredError, etc.)
│   ├── layout/             # Layout components (Header, Footer, Layout)
│   └── ui/                 # UI components (Button, Card, Modal, LanguageSwitcher)
├── pages/                  # Page components (Home, About, Reports, etc.)
├── content/                # Content management
│   └── locales/           # Translations
│       ├── en/            # English content (.json files)
│       └── ru/            # Russian content (.json files)
├── hooks/                  # Custom React hooks (useContent, etc.)
├── context/                # React Context (LanguageContext)
├── utils/                  # Utilities (contentLoader, etc.)
├── config/                 # Configuration files
│   ├── languages.js       # Language settings
│   └── routes.js          # Route definitions
└── styles/                # Global styles (index.css)

public/                     # Static assets
dist/                       # Build output
```

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm start          # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm test           # Run tests
npm run analyze    # Analyze bundle size
```

---

## 📝 Adding New Content

### 1. **Add a New Page**

#### Step 1: Create the page component
```jsx
// src/pages/MyNewPage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';

export default function MyNewPage() {
  const { language } = useContext(LanguageContext);
  const { content, t } = useContent('my-new-page', language);

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

#### Step 2: Register in routes
```js
// src/config/routes.js
import MyNewPage from '../pages/MyNewPage';

export const ROUTES = [
  // ... existing routes
  {
    path: '/my-new-page',
    element: MyNewPage,
    name: 'myNewPage',
    showInNav: true,  // Show in navigation menu
    order: 6,         // Navigation order
  },
];
```

#### Step 3: Add content files
```json
// src/content/locales/en/my-new-page.json
{
  "title": "My New Page",
  "description": "Page description here",
  "sections": {
    "intro": {
      "heading": "Introduction",
      "content": "Content here"
    }
  }
}
```

```json
// src/content/locales/ru/my-new-page.json
{
  "title": "Моя новая страница",
  "description": "Описание страницы здесь",
  "sections": {
    "intro": {
      "heading": "Введение",
      "content": "Содержание здесь"
    }
  }
}
```

---

## 🌍 Adding New Languages

### Step 1: Update language configuration
```js
// src/config/languages.js
export const LANGUAGES = {
  EN: 'en',
  RU: 'ru',
  FR: 'fr',  // Add new language
  ES: 'es',  // Add new language
};

export const LANGUAGE_NAMES = {
  en: 'English',
  ru: 'Русский',
  fr: 'Français',      // Add display name
  es: 'Español',       // Add display name
};
```

### Step 2: Create content folders
```bash
mkdir -p src/content/locales/fr
mkdir -p src/content/locales/es
```

### Step 3: Translate all content files
Copy all `.json` files from `src/content/locales/en/` and translate them:
```bash
# Copy structure
cp -r src/content/locales/en/* src/content/locales/fr/
cp -r src/content/locales/en/* src/content/locales/es/

# Then edit each file with translations
```

### Step 4: Update LanguageSwitcher
The `LanguageSwitcher` component automatically detects new languages from config.

---

## 📄 Content File Format

All content is managed as JSON files in `src/content/locales/{language}/`.

### Basic Structure
```json
{
  "title": "Page Title",
  "meta": {
    "description": "SEO description",
    "keywords": "keyword1, keyword2"
  },
  "sections": {
    "hero": {
      "title": "Hero Section Title",
      "subtitle": "Subtitle",
      "cta": "Call to Action"
    },
    "features": {
      "title": "Features",
      "items": [
        {
          "title": "Feature 1",
          "description": "Description"
        }
      ]
    }
  }
}
```

### Usage in Components
```jsx
import { useContent } from '../hooks/useContent';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function MyComponent() {
  const { language } = useContext(LanguageContext);
  const { content, t, loading } = useContent('page-name', language);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('sections.hero.subtitle')}</p>
      <button>{t('sections.hero.cta')}</button>
    </div>
  );
}
```

---

## 🔧 Component Guidelines

### Creating New Components

#### Layout Components (`src/components/layout/`)
```jsx
// src/components/layout/MyLayout.js
export default function MyLayout({ children }) {
  return <div className="my-layout">{children}</div>;
}
```

#### UI Components (`src/components/ui/`)
```jsx
// src/components/ui/Badge.js
export default function Badge({ label, variant = 'default' }) {
  return <span className={`badge badge-${variant}`}>{label}</span>;
}
```

#### Common Components (`src/components/common/`)
```jsx
// src/components/common/ErrorBoundary.js
export default class ErrorBoundary extends React.Component {
  // Implementation
}
```

### Component Best Practices
1. ✅ Use functional components with hooks
2. ✅ Keep components focused and reusable
3. ✅ Use descriptive names
4. ✅ Add PropTypes or TypeScript
5. ✅ Document complex logic

---

## 🎨 Styling

### Global Styles
- Main styles: `src/styles/index.css`
- Import in: `src/index.js`

### Component Styles
```jsx
// Use inline styles or CSS modules
import styles from './Component.module.css';

export default function Component() {
  return <div className={styles.container}></div>;
}
```

### CSS Classes Naming
Use BEM (Block Element Modifier) convention:
```css
.header { }
.header__nav { }
.header__nav--active { }
.header__logo { }
```

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Generates optimized files in `dist/` folder.

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

### Environment Variables
Create `.env` file:
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_SITE_NAME=Graweo
```

Access in code:
```js
const apiUrl = process.env.REACT_APP_API_URL;
```

---

## 📊 SEO & Meta Tags

### Update Meta Tags in Content
```json
{
  "meta": {
    "description": "Page description for search engines",
    "keywords": "keyword1, keyword2, keyword3",
    "ogImage": "https://example.com/image.jpg",
    "ogTitle": "Page Title"
  }
}
```

### Implement in Component
```jsx
useEffect(() => {
  document.title = t('title');
  document.querySelector('meta[name="description"]').content = t('meta.description');
}, [content]);
```

---

## 🔐 Security Checklist

- [ ] No hardcoded API keys or secrets
- [ ] Use environment variables for sensitive data
- [ ] Sanitize user input
- [ ] Use HTTPS for all external resources
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Review security headers in deployment config
- [ ] Enable CORS only for trusted domains

---

## 📈 Performance Optimization

### Code Splitting
```jsx
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}
```

### Image Optimization
```jsx
// Use next-gen formats
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### Bundle Analysis
```bash
npm run analyze
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Content not loading
```js
// Check if JSON file exists in correct language folder
// Check file naming: use kebab-case (my-page.json)
// Check for syntax errors in JSON files
```

**Issue**: Language switcher not working
```js
// Verify LanguageContext is wrapped around your app
// Check language codes match LANGUAGES config
```

**Issue**: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Useful Commands

```bash
# Development
npm start                   # Start dev server
npm test                    # Run tests
npm run build              # Production build
npm run analyze            # Bundle size analysis

# Maintenance
npm audit                  # Check vulnerabilities
npm audit fix              # Fix vulnerabilities
npm outdated               # Check outdated packages
npm update                 # Update packages

# Git
git status                 # Check changes
git add .                  # Stage changes
git commit -m "message"    # Commit changes
git push origin branch     # Push to remote
```

---

## 🔄 Version Control Best Practices

### Commit Messages
```
feat: Add new feature
fix: Fix a bug
docs: Update documentation
style: Format code
refactor: Reorganize code
perf: Improve performance
chore: Maintenance tasks
```

### Branch Naming
```
feature/add-new-page
fix/button-styling
docs/update-guide
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Changes
- Change 1
- Change 2

## Testing
How to test these changes

## Related Issues
Closes #123
```

---

## 📞 Support & Contacts

For issues or questions:
1. Check this guide first
2. Review relevant code comments
3. Check git history: `git log --oneline`
4. Create an issue on GitHub

---

## 📋 Maintenance Checklist

### Weekly
- [ ] Review recent commits
- [ ] Check for new issues/PRs
- [ ] Monitor site analytics

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Audit security: `npm audit`
- [ ] Review and update content
- [ ] Check SEO metrics

### Quarterly
- [ ] Major version updates if needed
- [ ] Performance review
- [ ] Security audit
- [ ] Backup important data

---

**Last Updated**: February 2026
**Maintained By**: Graweo Team
**Version**: 1.0
