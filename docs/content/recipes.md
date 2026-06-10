+++
title = "Recipes"
description = "Common patterns and combinations built with est components."
+++

Common patterns and combinations built with est components.

---

## Login form

A minimal centered login card.

{% demo() %}
```html
<div style="max-width:360px;margin:auto">
  <div class="card">
    <h3 style="margin:0 0 0.25rem">Sign in</h3>
    <p class="text-light" style="margin:0 0 1.5rem;font-size:0.875rem">Enter your credentials to continue.</p>
    <div data-field>
      <label for="l-email">Email</label>
      <input type="email" id="l-email" placeholder="you@example.com" autocomplete="email">
    </div>
    <div data-field>
      <label for="l-pass">Password</label>
      <input type="password" id="l-pass" placeholder="••••••••" autocomplete="current-password">
    </div>
    <button style="width:100%;margin-top:0.5rem">Sign in</button>
    <p class="text-light" style="text-align:center;font-size:0.75rem;margin-top:1rem">
      No account? <a href="#">Sign up</a>
    </p>
  </div>
</div>
```
{% end %}

## Notification card

Avatar + text + action in a card layout.

{% demo() %}
```html
<div class="card" style="max-width:380px">
  <div class="hstack justify-between">
    <div class="hstack gap-2">
      <figure data-variant="avatar">JD</figure>
      <div>
        <strong style="font-size:0.875rem">Jane Doe</strong>
        <p style="font-size:0.75rem;color:var(--muted-foreground);margin:0">Commented on your post</p>
      </div>
    </div>
    <span class="badge" data-variant="success">New</span>
  </div>
  <p style="font-size:0.875rem;margin-top:1rem;color:var(--muted-foreground)">"Great article! Really helpful for understanding the new API changes."</p>
  <div class="hstack" style="margin-top:1rem">
    <button class="small">Reply</button>
    <button class="small outline">Dismiss</button>
  </div>
</div>
```
{% end %}

## Confirm delete dialog

Destructive action pattern with a warning alert inside a dialog.

{% demo() %}
```html
<button data-variant="danger" commandfor="del-dialog" command="show-modal">Delete project</button>

<dialog id="del-dialog">
  <header>
    <h4>Delete project</h4>
    <p>This action is permanent and cannot be undone.</p>
  </header>
  <div>
    <div role="alert" data-variant="danger">
      All files, members, and history will be permanently removed.
    </div>
  </div>
  <footer>
    <button class="outline" commandfor="del-dialog" command="close">Cancel</button>
    <button data-variant="danger">Yes, delete</button>
  </footer>
</dialog>
```
{% end %}

## Stats row

KPI cards in a grid.

{% demo() %}
```html
<div class="row">
  <div class="col-3">
    <div class="card">
      <p class="text-light" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.5rem">Revenue</p>
      <strong style="font-size:1.5rem">$48,200</strong>
      <p style="font-size:0.75rem;color:var(--success);margin:0.25rem 0 0">↑ 12% this month</p>
    </div>
  </div>
  <div class="col-3">
    <div class="card">
      <p class="text-light" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.5rem">Users</p>
      <strong style="font-size:1.5rem">3,842</strong>
      <p style="font-size:0.75rem;color:var(--success);margin:0.25rem 0 0">↑ 8% this month</p>
    </div>
  </div>
  <div class="col-3">
    <div class="card">
      <p class="text-light" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.5rem">Churn</p>
      <strong style="font-size:1.5rem">2.4%</strong>
      <p style="font-size:0.75rem;color:var(--danger);margin:0.25rem 0 0">↑ 0.3% this month</p>
    </div>
  </div>
  <div class="col-3">
    <div class="card">
      <p class="text-light" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 0.5rem">Uptime</p>
      <strong style="font-size:1.5rem">99.9%</strong>
      <p style="font-size:0.75rem;color:var(--muted-foreground);margin:0.25rem 0 0">Last 30 days</p>
    </div>
  </div>
</div>
```
{% end %}

## Input with button group

Use `fieldset.group` to attach a button to an input.

{% demo() %}
```html
<fieldset class="group" style="max-width:400px">
  <input type="search" placeholder="Search components…" aria-label="Search">
  <button>Search</button>
</fieldset>
```
{% end %}

## Loading states

Combine skeletons and spinners for rich loading UX.

{% demo() %}
```html
<div class="row">
  <div class="col-6">
    <div class="card">
      <div class="hstack mb-4">
        <div role="status" class="skeleton" style="width:2.5rem;height:2.5rem;border-radius:9999px;flex-shrink:0"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:0.4rem">
          <div role="status" class="skeleton line" style="width:55%"></div>
          <div role="status" class="skeleton line" style="width:35%"></div>
        </div>
      </div>
      <div role="status" class="skeleton line"></div>
      <div role="status" class="skeleton line" style="width:85%"></div>
    </div>
  </div>
  <div class="col-6">
    <div class="card" aria-busy="true" data-spinner="overlay" style="min-height:120px">
      <h4>Processing…</h4>
      <p class="text-light">This will take a moment.</p>
    </div>
  </div>
</div>
```
{% end %}
