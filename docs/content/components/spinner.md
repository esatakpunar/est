+++
title = "Spinner"
weight = 160
description = "Loading spinners via aria-busy with size and overlay variants"
+++

Add `aria-busy="true"` to any element. Use `data-spinner` for size and overlay variants.

{% demo() %}
```html
<div class="hstack">
  <div aria-busy="true" data-spinner="small"></div>
  <div aria-busy="true"></div>
  <div aria-busy="true" data-spinner="large"></div>
  <button aria-busy="true" disabled>Loading…</button>
  <div aria-busy="true" data-spinner="overlay" class="card p-4" style="width:160px">
    <p>Content hidden during load</p>
  </div>
</div>
```
{% end %}
