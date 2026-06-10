+++
title = "Table"
weight = 90
description = "Native table with hover rows and mobile scroll"
+++

Native `<table>` with hover rows. Wrap in `.table` for horizontal scroll on mobile.

{% demo() %}
```html
<div class="table">
  <table>
    <thead>
      <tr><th>Name</th><th>Status</th><th>Role</th><th>Joined</th></tr>
    </thead>
    <tbody>
      <tr><td>Jane Doe</td><td><span class="badge" data-variant="success">Active</span></td><td>Admin</td><td>Jan 2024</td></tr>
      <tr><td>Alex Kim</td><td><span class="badge" data-variant="success">Active</span></td><td>Member</td><td>Mar 2024</td></tr>
      <tr><td>Sam Lee</td><td><span class="badge" data-variant="warning">Pending</span></td><td>Member</td><td>Jun 2024</td></tr>
      <tr><td>Chris Park</td><td><span class="badge" data-variant="secondary">Inactive</span></td><td>Member</td><td>Sep 2023</td></tr>
    </tbody>
  </table>
</div>
```
{% end %}
