+++
title = "Customizing"
description = "Override CSS custom properties to adapt est to your brand. No rebuilding required."
+++

All design decisions in est live in CSS custom properties (variables) declared in the `theme` layer.
Override them in your own stylesheet after importing est and they take effect everywhere — including dark mode.

```css
/* After importing est.min.css */
:root {
  --primary: #0070f3;               /* accent color */
  --primary-foreground: #ffffff;
  --radius-medium: 0.375rem;        /* border radius */
  --font-sans: "Inter", system-ui;  /* font stack */
}
```

---

## Color tokens

All colors use `light-dark()` for automatic dark mode. Override both values to customize dark mode separately.

<div class="table token-table">
  <table>
    <thead><tr><th>Token</th><th>Light</th><th>Dark</th><th>Usage</th></tr></thead>
    <tbody>
      <tr><td>--primary</td><td><span class="swatch" style="background:#6e56cf"></span>#6e56cf</td><td>#a78bfa</td><td>Buttons, links, focus ring, active tab</td></tr>
      <tr><td>--primary-foreground</td><td>#ffffff</td><td>#0a0a0a</td><td>Text on primary bg</td></tr>
      <tr><td>--background</td><td>#ffffff</td><td>#0a0a0a</td><td>Page background</td></tr>
      <tr><td>--foreground</td><td>#111111</td><td>#f5f5f5</td><td>Default text</td></tr>
      <tr><td>--secondary</td><td><span class="swatch" style="background:#f5f5f5;"></span>#f5f5f5</td><td>#1f1f1f</td><td>Secondary buttons, hover states</td></tr>
      <tr><td>--muted-foreground</td><td>#8c8c8c</td><td>#737373</td><td>Subdued text, labels</td></tr>
      <tr><td>--border</td><td><span class="swatch" style="background:#e5e5e5"></span>#e5e5e5</td><td>#2a2a2a</td><td>Borders everywhere</td></tr>
      <tr><td>--accent</td><td><span class="swatch" style="background:#ede9fe"></span>#ede9fe</td><td>#2d1f6e</td><td>Hover tint, badges, sidebar active</td></tr>
      <tr><td>--danger</td><td>#dc2626</td><td>#f87171</td><td>Destructive actions, error states</td></tr>
      <tr><td>--success</td><td>#16a34a</td><td>#4ade80</td><td>Success states</td></tr>
      <tr><td>--warning</td><td>#d97706</td><td>#fbbf24</td><td>Warning states</td></tr>
    </tbody>
  </table>
</div>

---

## Spacing & shape tokens

<div class="table token-table">
  <table>
    <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
    <tbody>
      <tr><td>--radius-small</td><td>0.25rem</td><td>Checkboxes, code, tooltips</td></tr>
      <tr><td>--radius-medium</td><td>0.5rem</td><td>Inputs, buttons, dropdowns</td></tr>
      <tr><td>--radius-large</td><td>0.875rem</td><td>Cards, dialogs</td></tr>
      <tr><td>--radius-full</td><td>9999px</td><td>Avatars, badges, switches</td></tr>
      <tr><td>--font-sans</td><td>-apple-system, …</td><td>All UI text</td></tr>
      <tr><td>--font-mono</td><td>ui-monospace, …</td><td>Code blocks</td></tr>
      <tr><td>--transition</td><td>150ms …</td><td>Most transitions</td></tr>
      <tr><td>--transition-fast</td><td>120ms …</td><td>Hover, focus transitions</td></tr>
    </tbody>
  </table>
</div>

---

## Example: blue accent

```css
:root {
  --primary: #0070f3;
  --primary-foreground: #ffffff;
  --ring: #0070f3;
  --accent: #eff6ff;
  --accent-foreground: #0070f3;
}
```

## Example: rounded corners

```css
:root {
  --radius-small: 0.5rem;
  --radius-medium: 0.75rem;
  --radius-large: 1.25rem;
}
```

## Example: custom font

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
:root {
  --font-sans: "Inter", system-ui, sans-serif;
}
</style>
```
