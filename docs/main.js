document.addEventListener('DOMContentLoaded', () => {
  // Prevent FOUC - apply saved theme before rendering.
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.style.colorScheme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Interactive demo blocks: convert <div class="es-demo"><pre> into Preview/Code tabs.
  document.querySelectorAll('pre').forEach(pre => {
    const menu = document.createElement('menu');
    menu.className = 'actions buttons';
    pre.prepend(menu);

    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'ghost small';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.querySelector('code').textContent.trim()).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      });
    });
    menu.appendChild(copyBtn);

    const demo = pre.closest('.es-demo');
    if (!demo) return;

    pre.style.display = 'block';
    const code = pre.querySelector('code');
    const rawHTML = code.textContent;

    demo.innerHTML = `
      <es-tabs>
        <div role="tablist">
          <button role="tab">Preview</button>
          <button role="tab">Code</button>
        </div>
        <div role="tabpanel">
          <div class="demo-box"><div class="demo-content">${rawHTML}</div></div>
        </div>
        <div role="tabpanel"></div>
      </es-tabs>
    `;

    const panel = demo.querySelector(':scope > es-tabs > [role="tabpanel"]:last-child');
    panel.appendChild(pre);

    const content = demo.querySelector('.demo-content');
    const el = code || pre;
    const highlighted = el.innerHTML;
    el.setAttribute('contenteditable', 'plaintext-only');
    el.setAttribute('spellcheck', 'false');
    el.addEventListener('input', () => content.innerHTML = el.textContent);

    // Reset button
    const resetBtn = document.createElement('button');
    resetBtn.className = 'ghost small';
    resetBtn.textContent = 'Reset';
    resetBtn.setAttribute('aria-label', 'Reset code');
    resetBtn.addEventListener('click', () => {
      el.innerHTML = highlighted;
      content.innerHTML = rawHTML;
    });
    menu.prepend(resetBtn);

    // Edit (fullscreen) button
    const editBtn = document.createElement('button');
    editBtn.className = 'ghost small btn-edit';
    editBtn.textContent = 'Expand';
    editBtn.setAttribute('aria-label', 'Toggle fullscreen editor');
    editBtn.addEventListener('click', () => {
      const isFull = demo.classList.toggle('fullscreen');
      editBtn.textContent = isFull ? 'Close' : 'Expand';
      if (isFull) {
        demo.querySelectorAll('[role="tabpanel"]').forEach(p => p.removeAttribute('hidden'));
      } else {
        const active = demo.querySelector('[role="tab"][aria-selected="true"]');
        if (active) active.click();
      }
    });
    menu.prepend(editBtn);
  });

  // Esc closes fullscreen editor.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const full = document.querySelector('.es-demo.fullscreen');
      if (full) {
        full.classList.remove('fullscreen');
        full.querySelector('.btn-edit').textContent = 'Expand';
        const active = full.querySelector('[role="tab"][aria-selected="true"]');
        if (active) active.click();
      }
    }
  });

  // Sidebar active link highlighting
  highlightNav();
  window.addEventListener('hashchange', highlightNav);

  // Intersection observer: highlight sidebar link as sections scroll into view.
  const sections = document.querySelectorAll('.demo-section[id]');
  const sidebar = document.querySelector('aside[data-sidebar]');
  if (sections.length && sidebar) {
    const ob = new IntersectionObserver(items => {
      const visible = items
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;

      sidebar.querySelector('[aria-current]')?.removeAttribute('aria-current');
      sidebar.querySelector(`a[href$="#${visible.target.id}"]`)?.setAttribute('aria-current', 'page');
    }, { rootMargin: '0px 0px -60% 0px' });

    sections.forEach(s => ob.observe(s));
  }
});

function highlightNav() {
  const sb = document.querySelector('aside[data-sidebar]');
  if (!sb) return;

  sb.querySelector('[aria-current="page"]')?.removeAttribute('aria-current');

  const p = location.pathname.replace(/\/$/, '').replace(/\.html$/, '');
  const h = location.hash;

  const a = (h && sb.querySelector(`a[href="${p}${h}"], a[href="${p}.html${h}"]`))
    || sb.querySelector(`a[href="${p}"], a[href="${p}.html"], a[href="${p}/"]`)
    || sb.querySelector(`a[href="./"], a[href="index.html"]`);

  if (a) a.setAttribute('aria-current', 'page');
}

function toggleTheme() {
  const cs = document.documentElement.style.colorScheme;
  const isDark = cs === 'dark' || (!cs && matchMedia('(prefers-color-scheme: dark)').matches);
  const theme = isDark ? 'light' : 'dark';
  document.documentElement.style.colorScheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
