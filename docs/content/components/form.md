+++
title = "Form"
weight = 30
description = "All native form elements styled. Checkbox, radio, switch, range, select — no custom classes."
+++

All native form elements styled. Checkbox, radio, switch, range, select — no custom classes.

{% demo(layout="block") %}
```html
<div class="vstack" style="max-width:420px">
  <div data-field>
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Jane Doe">
  </div>
  <div data-field>
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="jane@example.com">
    <span data-hint>We'll never share your email.</span>
  </div>
  <div data-field>
    <label for="bio">Bio</label>
    <textarea id="bio" placeholder="Tell us about yourself..."></textarea>
  </div>
  <div data-field>
    <label for="role">Role</label>
    <select id="role">
      <option>Designer</option>
      <option>Engineer</option>
      <option>Product</option>
    </select>
  </div>
  <div class="hstack">
    <label><input type="checkbox" checked> Agree to terms</label>
    <label><input type="checkbox" role="switch" checked> Notifications</label>
  </div>
  <div class="hstack">
    <label><input type="radio" name="plan"> Free</label>
    <label><input type="radio" name="plan" checked> Pro</label>
    <label><input type="radio" name="plan"> Enterprise</label>
  </div>
  <div data-field>
    <label for="vol">Volume</label>
    <input type="range" id="vol" min="0" max="100" value="40">
  </div>
  <button type="submit">Submit</button>
</div>
```
{% end %}
