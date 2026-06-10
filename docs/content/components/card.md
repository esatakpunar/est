+++
title = "Card"
weight = 40
description = "Content containers with optional header and footer"
+++

Use `.card` for content containers. Works with or without nested header/footer.

{% demo() %}
```html
<div class="row">
  <div class="col-6">
    <div class="card">
      <h4>Simple card</h4>
      <p>A clean container with a subtle border and generous padding.</p>
      <button class="small outline">Action</button>
    </div>
  </div>
  <div class="col-6">
    <div class="card">
      <h4>With badge</h4>
      <p>Cards pair well with other components like badges and avatars.</p>
      <div class="hstack mt-4">
        <span class="badge">New</span>
        <span class="badge" data-variant="success">Active</span>
      </div>
    </div>
  </div>
</div>
```
{% end %}
