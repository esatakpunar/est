+++
title = "Usage"
description = "Get est into your project in under a minute"
+++

## Installation

### npm

Install the package:

```bash
npm install @esatakpunar/est
```

Reference from `node_modules`:

```html
<link rel="stylesheet" href="node_modules/@esatakpunar/est/est.min.css">
<script src="node_modules/@esatakpunar/est/est.min.js" defer></script>
```

### CDN (jsDelivr)

No install needed. Drop these two tags into your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@esatakpunar/est/est.min.css">
<script src="https://cdn.jsdelivr.net/npm/@esatakpunar/est/est.min.js" defer></script>
```

### Direct download

Download `est.min.css` and `est.min.js` from the [releases page](https://github.com/esatakpunar/est/releases) and host them yourself.

---

## Minimal HTML

A complete page using est:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My app</title>
  <link rel="stylesheet" href="est.min.css">
</head>
<body>
  <main>
    <h1>Hello world</h1>
    <p>Styled out of the box.</p>
    <button>Click me</button>
  </main>
  <script src="est.min.js" defer></script>
</body>
</html>
```

---

## JavaScript API

Interactive components register as Web Components (`es-tabs`, `es-dropdown`) and expose a global `es.*` API:

### Toast

```js
// Simple message
es.toast('File saved.')

// With title and variant
es.toast('Your changes have been saved.', 'Success', { variant: 'success' })
es.toast('Something went wrong.', 'Error', { variant: 'danger' })
es.toast('Check your input.', 'Warning', { variant: 'warning' })

// Placement options: 'top-right' (default), 'top-left', 'top-center',
//                   'bottom-right', 'bottom-left', 'bottom-center'
es.toast('Bottom toast', 'Note', { placement: 'bottom-center' })

// Duration in ms (0 = persist until dismissed)
es.toast('Persists until closed.', null, { duration: 0 })

// Custom element
es.toast.el(document.querySelector('#my-template'))

// Clear all toasts
es.toast.clear()
```

### Tabs

```html
<es-tabs>
  <div role="tablist">
    <button role="tab">Tab 1</button>
    <button role="tab">Tab 2</button>
  </div>
  <div role="tabpanel">Content 1</div>
  <div role="tabpanel">Content 2</div>
</es-tabs>

<script>
// Programmatic control
const tabs = document.querySelector('es-tabs');
tabs.activeIndex = 1;

// Events
tabs.addEventListener('es-tab-change', e => {
  console.log('Active tab:', e.detail.index);
});
</script>
```

### Dropdown

```html
<es-dropdown>
  <button popovertarget="my-menu">Options</button>
  <menu popover id="my-menu">
    <button role="menuitem">Edit</button>
    <button role="menuitem">Duplicate</button>
    <hr>
    <button role="menuitem" data-variant="danger">Delete</button>
  </menu>
</es-dropdown>
```

---

## Dark mode

Dark mode is automatic via `prefers-color-scheme`. To force a specific scheme:

```html
<!-- Force dark -->
<html style="color-scheme: dark">

<!-- Force light -->
<html style="color-scheme: light">

<!-- Toggle with JS -->
<script>
function toggleTheme() {
  const isDark = document.documentElement.style.colorScheme === 'dark';
  document.documentElement.style.colorScheme = isDark ? 'light' : 'dark';
}
</script>
```

---

## Local dev setup

Requires [zola](https://github.com/getzola/zola/releases) static site generator.

```bash
cd docs && zola serve
```

Access the docs site at `http://localhost:1111`. After changing CSS or JS files, run `make dist`.
