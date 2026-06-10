+++
title = "Alert"
weight = 60
description = "Contextual messaging with variants"
+++

Use `role="alert"` with `data-variant` for contextual messaging.

{% demo(layout="block") %}
```html
<div class="vstack">
  <div role="alert">Default alert — neutral information.</div>
  <div role="alert" data-variant="success">Your changes have been saved successfully.</div>
  <div role="alert" data-variant="warning">Your trial ends in 3 days. <a href="#">Upgrade now</a>.</div>
  <div role="alert" data-variant="danger">Failed to save. Please check your connection.</div>
</div>
```
{% end %}
