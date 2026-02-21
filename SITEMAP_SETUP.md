# Sitemap Setup Guide

## Problem: Sitemap served as HTML instead of XML

Если Google Search Console показывает ошибку "файл Sitemap является страницей HTML", значит сервер доставляет sitemap.xml с неправильным Content-Type.

**Решение:** Нужно убедиться, что сервер доставляет файл с `Content-Type: application/xml`

---

## Решения по типам сервера

### 1. **Apache (с mod_rewrite)**

✅ **Решение:** Используйте файл `.htaccess`

**Включен файл:** `/public/.htaccess`

```apache
# Correct content type for XML
<FilesMatch "\.(xml)$">
  AddType application/xml .xml
  AddCharset utf-8 .xml
</FilesMatch>

<Files "sitemap.xml">
  AddType application/xml .xml
  Header set Content-Type "application/xml; charset=utf-8"
</Files>
```

**Как активировать:**
1. Убедитесь, что `mod_rewrite` и `mod_headers` включены на сервере
2. Файл `.htaccess` уже находится в `/public/`
3. Перезагрузите Apache: `sudo systemctl restart apache2`

**Проверка:**
```bash
curl -I https://graweo.org/sitemap.xml
# Должно показать: Content-Type: application/xml
```

---

### 2. **Nginx**

✅ **Решение:** Используйте конфигурационный файл Nginx

**Включен файл:** `nginx.conf`

```nginx
# Correct MIME types for XML files
types {
    application/xml xml;
}

# Sitemap.xml - special handling
location = /sitemap.xml {
    add_header Content-Type "application/xml; charset=utf-8";
    expires 1h;
}
```

**Как активировать:**
1. Скопируйте `nginx.conf` в `/etc/nginx/sites-available/graweo.org`
2. Создайте симлинк: `sudo ln -s /etc/nginx/sites-available/graweo.org /etc/nginx/sites-enabled/`
3. Проверьте синтаксис: `sudo nginx -t`
4. Перезагрузите Nginx: `sudo systemctl restart nginx`

---

### 3. **IIS (Windows)**

✅ **Решение:** Используйте `web.config`

**Включен файл:** `/public/web.config`

```xml
<staticContent>
  <mimeMap fileExtension=".xml" mimeType="application/xml" />
</staticContent>
```

**Как активировать:**
1. Скопируйте `web.config` в корень сайта
2. IIS автоматически прочитает конфигурацию
3. Перезагрузите приложение IIS

---

### 4. **Node.js / Express**

✅ **Решение:** Используйте middleware для установки правильного Content-Type

**Пример:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set correct content type for sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// Set correct content type for robots.txt
app.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// React Router - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### 5. **Vercel (рекомендуется)**

✅ **Решение:** Создайте `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "public": false,
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/xml; charset=utf-8"
        },
        {
          "key": "Cache-Control",
          "value": "max-age=3600, must-revalidate"
        }
      ]
    },
    {
      "source": "/robots.txt",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/plain; charset=utf-8"
        }
      ]
    }
  ]
}
```

---

### 6. **Netlify**

✅ **Решение:** Создайте `netlify.toml`

```toml
# netlify.toml

[[headers]]
  for = "/sitemap.xml"
  [headers.values]
    Content-Type = "application/xml; charset=utf-8"
    Cache-Control = "max-age=3600, must-revalidate"

[[headers]]
  for = "/robots.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

---

### 7. **GitHub Pages**

⚠️ **Проблема:** GitHub Pages не поддерживает динамическую установку Content-Type

**Решение:** Используйте Jekyll front matter

Создайте `sitemap.xml` с:
```
---
layout: null
content_type: application/xml
permalink: /sitemap.xml
---
```

Или используйте плагин Jekyll.

---

## Проверка Sitemap

### Локально

```bash
# Проверьте, что файл существует
ls -la public/sitemap.xml

# Проверьте содержимое
cat public/sitemap.xml

# Валидация XML синтаксиса
xmllint --format public/sitemap.xml
```

### На хостинге

```bash
# Проверьте Content-Type
curl -I https://graweo.org/sitemap.xml

# Ожидаемый результат:
# Content-Type: application/xml; charset=utf-8

# Получите содержимое
curl https://graweo.org/sitemap.xml
```

---

## Отправка в поисковые системы

### Google Search Console

1. Перейдите в Google Search Console
2. Выберите вашу собственность (property)
3. Перейдите в "Sitemaps"
4. Нажмите "Add Sitemap"
5. Введите: `https://graweo.org/sitemap.xml`
6. Нажмите "Submit"

**Если остается ошибка:**
1. Проверьте Content-Type: `curl -I https://graweo.org/sitemap.xml`
2. Убедитесь, что файл XML валиден
3. Проверьте robots.txt: `curl https://graweo.org/robots.txt`

### Bing Webmaster Tools

1. Перейдите в Bing Webmaster Tools
2. Выберите сайт
3. Перейдите в "Sitemap"
4. Нажмите "Submit Sitemap"
5. Введите: `https://graweo.org/sitemap.xml`

### Яндекс Webmaster

1. Перейдите в Яндекс Вебмастер
2. Выберите сайт
3. Перейдите в "Sitemaps"
4. Добавьте: `https://graweo.org/sitemap.xml`

---

## Частые ошибки и решения

### ❌ Ошибка: "Файл является HTML"

**Причина:** Неправильный Content-Type

**Решение:**
- Проверьте конфигурацию сервера
- Убедитесь, что файл доставляется как `application/xml`
- Используйте соответствующий конфиг для вашего сервера

### ❌ Ошибка: "Файл не найден (404)"

**Причина:** Файл не находится в правильном месте или React Router перехватывает запрос

**Решение:**
- Убедитесь, что sitemap.xml находится в `/public/`
- Добавьте правило, чтобы не переписывать `.xml` файлы
- Проверьте `react-router` конфигурацию

### ❌ Ошибка: "Неправильный XML синтаксис"

**Причина:** Файл повреждена или некорректный XML

**Решение:**
```bash
# Валидируйте XML
xmllint --format public/sitemap.xml

# Проверьте первую строку
head -1 public/sitemap.xml
# Должно быть: <?xml version="1.0" encoding="UTF-8"?>
```

---

## Оптимизация Sitemap

### Лучшие практики

1. **Хост должен быть правильным**
   - Используйте HTTPS (не HTTP)
   - Используйте правильный домен
   - Исключите параметры сессии (не добавляйте ?sid=123)

2. **Включайте важные страницы**
   - Включайте все публичные страницы
   - Исключайте страницы "спасибо" и подтверждения
   - Исключайте админ-панели

3. **Устанавливайте правильные приоритеты**
   - Главная: 1.0
   - Основные разделы: 0.8-0.9
   - Второстепенные: 0.5-0.7

4. **Обновляйте lastmod**
   - Установите на дату последнего редактирования страницы
   - Используйте формат: YYYY-MM-DD

5. **Регулярно обновляйте**
   - Если часто добавляете контент, обновляйте sitemap еженедельно
   - Если редко - можно раз в месяц

---

## Автоматическое генерирование Sitemap

Для больших сайтов, генерируйте sitemap динамически:

### Используйте пакет npm

```bash
npm install sitemap express
```

```javascript
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: 'https://graweo.org' });
  const pipeline = smStream.pipe(createWriteStream(path.join(__dirname, 'public/sitemap.xml')));

  smStream.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
  smStream.write({ url: '/Home', changefreq: 'weekly', priority: 0.9 });
  smStream.write({ url: '/About', changefreq: 'monthly', priority: 0.8 });
  smStream.write({ url: '/Donate', changefreq: 'weekly', priority: 0.9 });
  smStream.write({ url: '/Reports', changefreq: 'weekly', priority: 0.8 });
  smStream.write({ url: '/Contacts', changefreq: 'monthly', priority: 0.7 });

  smStream.end();

  await streamToPromise(pipeline);
  console.log('Sitemap generated successfully');
}

generateSitemap().catch(console.error);
```

---

## Резюме

✅ Файлы конфигурации готовы:
- `/public/.htaccess` - для Apache
- `nginx.conf` - для Nginx
- `/public/web.config` - для IIS
- `vercel.json` (нужно создать) - для Vercel
- `netlify.toml` (нужно создать) - для Netlify

✅ Sitemap.xml уже создан: `/public/sitemap.xml`

✅ Robots.txt уже создан: `/public/robots.txt`

🚀 **Следующий шаг:** Определить, какой сервер вы используете, и применить соответствующую конфигурацию!

---

*Обновлено: 21 февраля 2026*
