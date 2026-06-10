+++
title = "Sidebar"
weight = 180
description = "Responsive sidebar layout with sticky top nav"
+++

Add `data-sidebar-layout` to `<body>`. Includes a sticky top nav and a responsive sidebar.

{{ sidebar_demo() }}

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
