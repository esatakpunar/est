+++
title = "Dropdown"
weight = 120
description = "Viewport-aware dropdown menus using the es-dropdown Web Component"

[extra]
webcomponent = true
+++

Use the `<es-dropdown>` Web Component. Handles viewport-aware positioning and keyboard navigation.

{% demo() %}
```html
<div class="hstack">
  <es-dropdown>
    <button popovertarget="dd1" class="outline small">
      Options
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <menu popover id="dd1">
      <button role="menuitem">Edit</button>
      <button role="menuitem">Duplicate</button>
      <button role="menuitem">Share</button>
      <hr>
      <button role="menuitem" style="color:var(--danger)">Delete</button>
    </menu>
  </es-dropdown>

  <es-dropdown>
    <button popovertarget="dd2">
      New
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <menu popover id="dd2">
      <button role="menuitem">New file</button>
      <button role="menuitem">New folder</button>
      <button role="menuitem">New project</button>
    </menu>
  </es-dropdown>
</div>
```
{% end %}
