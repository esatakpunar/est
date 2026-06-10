# est

Ultra-lightweight, zero dependency, semantic HTML/CSS/JS UI library. ~9KB CSS + JS.

Soft purple accent. Apple HIG-inspired spacing. Notion-style tabs. No framework. No build step.

## Install

```bash
npm install @esatakpunar/est
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@esatakpunar/est/est.min.css">
<script src="https://cdn.jsdelivr.net/npm/@esatakpunar/est/est.min.js" defer></script>
```

## Usage

```html
<button>Primary</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="danger">Danger</button>

<es-tabs>
  <div role="tablist">
    <button role="tab">Tab 1</button>
    <button role="tab">Tab 2</button>
  </div>
  <div role="tabpanel">Content 1</div>
  <div role="tabpanel">Content 2</div>
</es-tabs>

<script>
es.toast('Saved!', 'Success', { variant: 'success' })
</script>
```

## Build

Requires `npx` (comes with npm):

```bash
make dist
```

## Docs

See `docs/` folder or visit the live site.

## License

MIT
