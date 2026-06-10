+++
title = "Dialog"
weight = 110
description = "Native dialog with fade-up animation and blur backdrop"
+++

Native `<dialog>` with fade-up animation and blur backdrop. Use `commandfor` / `showModal()` to open.

{% demo() %}
```html
<button commandfor="demo-dialog" command="show-modal">Open dialog</button>

<dialog id="demo-dialog">
  <header>
    <h3>Confirm action</h3>
    <p>This action cannot be undone. Are you sure?</p>
  </header>
  <div></div>
  <footer>
    <button class="outline" commandfor="demo-dialog" command="close">Cancel</button>
    <button data-variant="danger">Delete</button>
  </footer>
</dialog>
```
{% end %}
