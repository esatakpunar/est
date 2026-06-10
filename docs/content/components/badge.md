+++
title = "Badge"
weight = 50
description = "Inline status indicators"
+++

Inline status indicators. Use `data-variant` for semantic colors.

{% demo() %}
```html
<div class="hstack">
  <span class="badge">Default</span>
  <span class="badge" data-variant="secondary">Secondary</span>
  <span class="badge" data-variant="success">Success</span>
  <span class="badge" data-variant="warning">Warning</span>
  <span class="badge" data-variant="danger">Danger</span>
  <span class="badge outline">Outline</span>
</div>
```
{% end %}
