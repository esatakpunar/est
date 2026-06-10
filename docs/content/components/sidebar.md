+++
title = "Sidebar"
weight = 180
description = "Responsive sidebar layout with sticky top nav"
+++

Add `data-sidebar-layout` to `<body>`. Includes a sticky top nav and a responsive sidebar.

<div class="demo-box" style="position:relative;height:280px;padding:0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-medium)">
  <iframe src="/sidebar-demo.html" style="width:100%;height:100%;border:0" title="Sidebar demo" loading="lazy"></iframe>
</div>

```html
<body data-sidebar-layout>
  <nav data-topnav>
    <button data-sidebar-toggle>☰</button>
    <a href="/">Brand</a>
  </nav>
  <aside data-sidebar>
    <nav>
      <ul>
        <li><a href="#" aria-current="page">Dashboard</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </aside>
  <main>
    <!-- page content -->
  </main>
</body>
```
