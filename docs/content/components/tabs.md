+++
title = "Tabs"
weight = 100
description = "Accessible tab panels using the es-tabs Web Component"

[extra]
webcomponent = true
+++

Use the `<es-tabs>` Web Component. Handles keyboard navigation, ARIA, and focus management.

{% demo(layout="block") %}
```html
<es-tabs>
  <div role="tablist">
    <button role="tab">Account</button>
    <button role="tab">Billing</button>
    <button role="tab">Security</button>
  </div>
  <div role="tabpanel">
    <h4>Account settings</h4>
    <p>Manage your profile, username, and preferences here.</p>
  </div>
  <div role="tabpanel">
    <h4>Billing</h4>
    <p>View your subscription, payment method, and invoices.</p>
  </div>
  <div role="tabpanel">
    <h4>Security</h4>
    <p>Change your password and enable two-factor authentication.</p>
  </div>
</es-tabs>
```
{% end %}
