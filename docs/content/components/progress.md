+++
title = "Progress & Meter"
weight = 150
description = "Native progress and meter elements with custom styling"
+++

Native `<progress>` and `<meter>` with custom styling. Meter color-codes automatically by value range.

{% demo() %}
```html
<div class="vstack" style="max-width:360px">
  <label>Uploading… <small>65%</small></label>
  <progress value="65" max="100"></progress>

  <label>Disk usage</label>
  <meter value="0.4" optimum="0.3" high="0.7"></meter>

  <label>Battery</label>
  <meter value="0.2" low="0.25" optimum="0.8"></meter>
</div>
```
{% end %}
