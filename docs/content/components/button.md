+++
title = "Button"
weight = 20
description = "Button variants, sizes, and groups"
+++

`<button>` and `<a class="button">` are styled automatically. Use `data-variant` and class modifiers.

{% demo() %}
```html
<div class="vstack gap-4">
  <div class="hstack">
    <button>Primary</button>
    <button data-variant="secondary">Secondary</button>
    <button data-variant="danger">Danger</button>
    <button disabled>Disabled</button>
  </div>
  <div class="hstack">
    <button class="outline">Outline</button>
    <button class="outline" data-variant="secondary">Secondary</button>
    <button class="outline" data-variant="danger">Danger</button>
  </div>
  <div class="hstack">
    <button class="ghost">Ghost</button>
    <button class="ghost" data-variant="danger">Ghost danger</button>
  </div>
  <div class="hstack">
    <button class="small">Small</button>
    <button>Default</button>
    <button class="large">Large</button>
  </div>
  <div class="hstack">
    <menu class="buttons">
      <li><button class="outline">Left</button></li>
      <li><button class="outline">Middle</button></li>
      <li><button class="outline">Right</button></li>
    </menu>
  </div>
</div>
```
{% end %}
