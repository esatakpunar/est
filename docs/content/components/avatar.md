+++
title = "Avatar"
weight = 70
description = "User avatars with sizes and group stacking"
+++

Use `figure[data-variant="avatar"]` for user avatars. Group them with `role="group"`.

{% demo() %}
```html
<div class="hstack">
  <figure data-variant="avatar" class="small">EA</figure>
  <figure data-variant="avatar">JD</figure>
  <figure data-variant="avatar" class="large">AB</figure>
  <figure data-variant="avatar" role="group">
    <figure data-variant="avatar"><img src="https://i.pravatar.cc/80?img=1" alt="User 1"></figure>
    <figure data-variant="avatar"><img src="https://i.pravatar.cc/80?img=2" alt="User 2"></figure>
    <figure data-variant="avatar"><img src="https://i.pravatar.cc/80?img=3" alt="User 3"></figure>
    <figure data-variant="avatar">+4</figure>
  </figure>
</div>
```
{% end %}
