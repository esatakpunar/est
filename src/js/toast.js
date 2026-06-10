/**
 * est - Toast Notifications
 *
 * Usage:
 *   es.toast('Saved!')
 *   es.toast('Action completed successfully', 'All good')
 *   es.toast('Operation completed.', 'Success', { variant: 'success' })
 *   es.toast('Something went wrong.', 'Error', { variant: 'danger', placement: 'bottom-center' })
 *
 *   // Custom markup
 *   es.toast.el(element)
 *   es.toast.el(element, { duration: 4000, placement: 'bottom-center' })
 */

const toasts = {};

function _get(placement) {
  if (!toasts[placement]) {
    const el = document.createElement('div');
    el.className = 'toast-container';
    el.setAttribute('popover', 'manual');
    el.setAttribute('data-placement', placement);
    document.body.appendChild(el);
    toasts[placement] = el;
  }

  return toasts[placement];
}

function _show(el, options = {}) {
  const { placement = 'top-right', duration = 4000 } = options;
  const p = _get(placement);

  el.classList.add('toast');

  let timeout;

  el.onmouseenter = () => clearTimeout(timeout);
  el.onmouseleave = () => {
    if (duration > 0) {
      timeout = setTimeout(() => _remove(el, p), duration);
    }
  };

  el.setAttribute('data-entering', '');
  p.appendChild(el);
  p.showPopover();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.removeAttribute('data-entering');
    });
  });

  if (duration > 0) {
    timeout = setTimeout(() => _remove(el, p), duration);
  }

  return el;
}

function _remove(el, container) {
  if (el.hasAttribute('data-exiting')) {
    return;
  }
  el.setAttribute('data-exiting', '');

  const cleanup = () => {
    el.remove();
    if (!container.children.length) {
      container.hidePopover();
    }
  };

  el.addEventListener('transitionend', cleanup, { once: true });

  const t = getComputedStyle(el).getPropertyValue('--transition').trim();
  const val = parseFloat(t);
  const ms = t.endsWith('ms') ? val : val * 1000;
  setTimeout(cleanup, ms);
}

export function toast(message, title, options = {}) {
  const { variant = 'info', ...rest } = options;

  const el = document.createElement('output');
  el.setAttribute('data-variant', variant);

  if (title) {
    const titleEl = document.createElement('h6');
    titleEl.className = 'toast-title';
    titleEl.textContent = title;
    el.appendChild(titleEl);
  }

  const msgEl = document.createElement('div');
  msgEl.className = 'toast-message';
  msgEl.textContent = message;
  el.appendChild(msgEl);

  return _show(el, rest);
}

export function toastEl(el, options = {}) {
  let t;

  if (el instanceof HTMLTemplateElement) {
    t = el.content.firstElementChild?.cloneNode(true);
  } else if (el) {
    t = el.cloneNode(true);
  }

  if (!t) {
    return;
  }

  t.removeAttribute('id');

  return _show(t, options);
}

export function toastClear(placement) {
  if (placement && toasts[placement]) {
    toasts[placement].innerHTML = '';
    toasts[placement].hidePopover();
  } else {
    Object.values(toasts).forEach(c => {
      c.innerHTML = '';
      c.hidePopover();
    });
  }
}
