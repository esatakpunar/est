+++
title = "Accordion"
weight = 80
description = "Native details and summary elements with auto-merged borders"
+++

Native `<details>` and `<summary>` elements. Adjacent items merge borders automatically.

{% demo(layout="block") %}
```html
<details open>
  <summary>What is est?</summary>
  <p>est is a minimal, zero-dependency UI library built on semantic HTML. It styles native elements directly without class pollution.</p>
</details>
<details>
  <summary>How do I install it?</summary>
  <p>Drop two files into your project: <code>est.min.css</code> and <code>est.min.js</code>. Or install via npm: <code>npm install @esatakpunar/est</code>.</p>
</details>
<details>
  <summary>Is dark mode supported?</summary>
  <p>Yes. Dark mode is automatic via <code>prefers-color-scheme</code>. All CSS custom properties adapt. You can also force a scheme with <code>color-scheme: dark</code> on the root.</p>
</details>
```
{% end %}
