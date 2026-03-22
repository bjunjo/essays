# essays — bjunjo.com

Personal essays by Billy Jo. Published at [bjunjo.com](https://bjunjo.com).

---

## How to publish a new essay

### 1. English essay

Create a new folder under `en/` and add `index.html`:

```
en/
  your-essay-slug/
    index.html
```

Copy the template from any existing essay (e.g. `en/doing-vs-searching/index.html`) and update:
- `<title>` tag
- `<h1>` title
- `.subtitle` text
- Date in `.essay-meta`
- Body paragraphs

Then add a link to the new essay in `index.html` (the homepage).

### 2. Korean essay

Same process, but under `ko/`:

```
ko/
  your-essay-slug/
    index.html
```

Copy from any existing Korean essay and update content. Add a link in `ko/index.html`.

### 3. Push to GitHub → site updates automatically

```bash
git add .
git commit -m "Add: essay title"
git push
```

GitHub Pages will rebuild and publish within ~1 minute.

---

## Directory structure

```
essays/
├── index.html          ← English homepage (all essays listed here)
├── CNAME               ← bjunjo.com domain
├── en/
│   ├── doing-vs-searching/index.html
│   ├── first-job/index.html
│   └── getting-paid-in-bitcoin/index.html
├── ko/
│   ├── index.html      ← Korean homepage
│   ├── altcoin/index.html
│   └── corporate-culture/index.html
└── README.md
```

---

## Email newsletter

Subscribers are collected via [Buttondown](https://buttondown.com). When you publish a new essay, log into Buttondown and send it as an email to your list.

No comments. No noise. Readers who want to respond will reply by email.

---

## Future Projects

### Tech Independence (inspired by Derek Sivers)
- Reference: https://sive.rs/ti
- Goal: Self-hosted email + newsletter infrastructure
- Stack: Vultr VPS ($5/mo) + Listmonk (open source) + Mailgun SMTP relay
- When to do: Once subscriber list grows past ~200 people
- Estimated setup time: ~2 hours with Derek's guide

