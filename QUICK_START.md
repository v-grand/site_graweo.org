# 🚀 Quick Start Guide

> Fast reference for common admin tasks

---

## 🎯 Most Common Tasks

### 1. **Add text to existing page**
```bash
# Edit the content file in the language you want
src/content/locales/en/home.json
src/content/locales/ru/home.json
```

**No code changes needed!** Just update the JSON and reload.

---

### 2. **Create a completely new page**

```bash
# 1. Create React component
src/pages/MyPage.js

# 2. Register it in routes
src/config/routes.js

# 3. Add content files
src/content/locales/en/my-page.json
src/content/locales/ru/my-page.json

# 4. Done! The page is now live
```

---

### 3. **Add a new language (e.g., French)**

```bash
# 1. Update language config
src/config/languages.js
# Add: FR: 'fr' and fr: 'Français'

# 2. Create language folder
mkdir src/content/locales/fr

# 3. Copy and translate all JSON files
cp -r src/content/locales/en/* src/content/locales/fr/

# 4. Edit each file with translations
# 5. Done! French option appears in language switcher
```

---

### 4. **Change header/footer text**

Header and footer are components that load content from JSON:
```bash
src/content/locales/en/header.json
src/content/locales/en/footer.json
```

Just edit these files and it updates everywhere!

---

### 5. **Update navigation menu**

In `src/config/routes.js`:
```js
{
  path: '/my-page',
  element: MyPage,
  name: 'myPage',
  showInNav: true,   // ← Set to show in menu
  order: 3,          // ← Control menu position
}
```

---

## 📁 File Structure Map

```
For adding text content → src/content/locales/{lang}/*.json
For React components → src/components/*/
For routing → src/config/routes.js
For languages → src/config/languages.js
For utilities → src/utils/
For styles → src/styles/
```

---

## ⚡ Speed Tips

| Task | Time | File(s) |
|------|------|---------|
| Update page text | 1 min | `src/content/locales/` |
| Create new page | 10 min | 3 files + 1 JSON pair |
| Add language | 30 min | config + translate all JSON |
| Fix styling | 5 min | `src/styles/` or component CSS |
| Add new component | 15 min | `src/components/` |

---

## 🔍 Finding Things

| What I need | Where to look |
|-------------|---------------|
| Page text | `src/content/locales/en/` |
| Navigation setup | `src/config/routes.js` |
| Language codes | `src/config/languages.js` |
| Header/Footer | `src/components/layout/` |
| Styles | `src/styles/` |
| Icons/Images | `public/` |

---

## ✅ Checklist for New Page

- [ ] Created component file: `src/pages/MyPage.js`
- [ ] Added route to `src/config/routes.js`
- [ ] Created `src/content/locales/en/my-page.json`
- [ ] Created `src/content/locales/ru/my-page.json`
- [ ] Page accessible at `/my-page`
- [ ] Menu item shows (if `showInNav: true`)
- [ ] Content loads in both languages

---

## 💡 Pro Tips

1. **Copy existing page as template**
   - Most similar page → Copy → Rename → Update config

2. **Test locally before committing**
   ```bash
   npm start
   # Check page, language switching, etc.
   ```

3. **Use consistent JSON structure**
   - Look at existing files for format
   - Keep similar pages similar

4. **One commit per change**
   ```bash
   git add .
   git commit -m "Add French language support"
   git push origin claude/analyze-graweo-site-6Jjki
   ```

---

## 🆘 Common Errors

**Page not showing?**
- Check route is in `src/config/routes.js`
- Check path matches exactly

**Content not loading?**
- Check JSON file name matches (use kebab-case)
- Check language code is correct
- Check JSON syntax (use JSON validator)

**Styling not working?**
- Check CSS file path is correct
- Check class names match
- Clear cache: Ctrl+Shift+Del (browser)

---

## 🚢 Deploy Changes

```bash
# After making changes:
npm run build    # Test build
git push origin claude/analyze-graweo-site-6Jjki
# PR is auto-created, then merge to main
```

---

See **ADMIN_GUIDE.md** for detailed documentation.
