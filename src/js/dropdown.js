/**
 * est - Dropdown Component
 * Provides positioning, keyboard navigation, and ARIA state management.
 *
 * Usage:
 * <es-dropdown>
 *   <button popovertarget="menu-id">Options</button>
 *   <menu popover id="menu-id">
 *     <button role="menuitem">Item 1</button>
 *     <button role="menuitem">Item 2</button>
 *   </menu>
 * </es-dropdown>
 */

import { EsBase } from './base.js';

class EsDropdown extends EsBase {
  #menu;
  #trigger;
  #position;
  #items;

  init() {
    this.#menu = this.$('[popover]');
    this.#trigger = this.$('[popovertarget]');

    if (!this.#menu || !this.#trigger) return;

    this.#menu.addEventListener('toggle', this);
    this.#menu.addEventListener('keydown', this);

    this.#position = () => {
      const r = this.#trigger.getBoundingClientRect();
      const m = this.#menu.getBoundingClientRect();

      this.#menu.style.top = `${r.bottom + m.height > window.innerHeight ? r.top - m.height : r.bottom}px`;
      this.#menu.style.left = `${r.left + m.width > window.innerWidth ? r.right - m.width : r.left}px`;
    };
  }

  ontoggle(e) {
    if (e.newState === 'open') {
      this.#position();
      window.addEventListener('scroll', this.#position, true);
      window.addEventListener('resize', this.#position);
      this.#items = this.$$('[role="menuitem"]');
      this.#items[0]?.focus();
      this.#trigger.ariaExpanded = 'true';
    } else {
      this.cleanup();
      this.#items = null;
      this.#trigger.ariaExpanded = 'false';
      this.#trigger.focus();
    }
  }

  onkeydown(e) {
    if (!e.target.matches('[role="menuitem"]')) return;

    const idx = this.#items.indexOf(e.target);
    const next = this.keyNav(e, idx, this.#items.length, 'ArrowUp', 'ArrowDown', true);
    if (next >= 0) this.#items[next].focus();
  }

  cleanup() {
    window.removeEventListener('scroll', this.#position, true);
    window.removeEventListener('resize', this.#position);
  }
}

customElements.define('es-dropdown', EsDropdown);
