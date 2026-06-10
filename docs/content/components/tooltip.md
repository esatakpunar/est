+++
title = "Tooltip"
weight = 140
description = "CSS tooltips via title attribute or data-tooltip with 4 placements"
+++

Add `title` to any element — est converts it to a styled tooltip. Or use `data-tooltip` directly. Supports 4 placements.

{% demo() %}
```html
<div class="hstack">
  <button title="This is a tooltip">Hover me (top)</button>
  <button data-tooltip="Shows below" data-tooltip-placement="bottom">Below</button>
  <button data-tooltip="Shows on the left" data-tooltip-placement="left">Left</button>
  <button data-tooltip="Shows on the right" data-tooltip-placement="right">Right</button>
</div>
```
{% end %}
