+++
title = "Grid"
weight = 190
description = "12-column responsive grid"
+++

12-column grid. Use `.container`, `.row`, and `.col-N` classes. Stacks to 4 columns on mobile.

{% demo() %}
```html
<div class="demo-grid">
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
  </div>
  <div class="row">
    <div class="col-3">col-3</div>
    <div class="col-6">col-6</div>
    <div class="col-3">col-3</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
  <div class="row">
    <div class="col-12">col-12</div>
  </div>
</div>
```
{% end %}
