+++
title = "Skeleton"
weight = 170
description = "Loading placeholder shapes with shimmer animation"
+++

Use `role="status"` with class `skeleton` for loading placeholders. Add `.line` or `.box`.

{% demo(layout="block") %}
```html
<div class="card" style="max-width:360px">
  <div class="hstack mb-4">
    <div role="status" class="skeleton box" style="width:2.5rem;height:2.5rem;border-radius:9999px"></div>
    <div class="vstack flex-col" style="flex:1;gap:0.5rem">
      <div role="status" class="skeleton line" style="width:60%"></div>
      <div role="status" class="skeleton line" style="width:40%"></div>
    </div>
  </div>
  <div role="status" class="skeleton line"></div>
  <div role="status" class="skeleton line" style="width:80%"></div>
  <div role="status" class="skeleton line" style="width:90%"></div>
</div>
```
{% end %}
