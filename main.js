// Apply saved theme immediately (also handled inline in <head>, this is a fallback).
(function() {
  var t = localStorage.getItem('theme');
  if (t) { document.documentElement.style.colorScheme = t; document.documentElement.setAttribute('data-theme', t); }
})();

document.addEventListener('DOMContentLoaded', () => {

  // ── Demo blocks ──────────────────────────────────────────────────────────
  // For each .es-demo, read the <pre><code> content, build a Preview/Code
  // tab UI without depending on es-tabs (so nested components work cleanly).

  // Iframe-based demos (sidebar): structure already rendered server-side,
  // JS only wires up tab switching and copy button.
  document.querySelectorAll('.es-iframe-demo').forEach(demo => {
    const [previewBtn, codeBtn] = demo.querySelectorAll('.demo-tab');
    const copyBtn = demo.querySelector('.demo-copy');
    const previewPanel = demo.querySelector('.demo-preview');
    const codePanel = demo.querySelector('.demo-code-panel');
    const pre = demo.querySelector('pre');
    const code = pre && pre.querySelector('code');

    previewBtn.addEventListener('click', () => {
      previewBtn.classList.add('active'); codeBtn.classList.remove('active');
      previewPanel.style.display = ''; codePanel.style.display = 'none';
    });
    codeBtn.addEventListener('click', () => {
      codeBtn.classList.add('active'); previewBtn.classList.remove('active');
      previewPanel.style.display = 'none'; codePanel.style.display = '';
    });
    copyBtn && copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText((code || pre).textContent.trim()).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      });
    });
  });

  document.querySelectorAll('.es-demo').forEach(demo => {
    const pre = demo.querySelector('pre');
    if (!pre) return;

    const code = pre.querySelector('code');
    if (!code) return;

    // rawHTML: the actual HTML to render in the preview.
    // code.textContent returns the unescaped string because the browser
    // stores &lt; etc. as text nodes (value = "<").
    const rawHTML = code.textContent;
    const highlighted = code.innerHTML; // escaped entities, for Reset

    // ── Build tab bar ─────────────────────────────────────────────────────
    const tabbar = document.createElement('div');
    tabbar.className = 'demo-tabbar';

    const previewBtn = document.createElement('button');
    previewBtn.className = 'demo-tab active';
    previewBtn.textContent = 'Preview';

    const codeBtn = document.createElement('button');
    codeBtn.className = 'demo-tab';
    codeBtn.textContent = 'Code';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'demo-copy ghost small';
    copyBtn.textContent = 'Copy';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'demo-reset ghost small';
    resetBtn.textContent = 'Reset';
    resetBtn.style.display = 'none'; // only show in Code tab

    tabbar.appendChild(previewBtn);
    tabbar.appendChild(codeBtn);
    tabbar.appendChild(copyBtn);
    tabbar.appendChild(resetBtn);

    // ── Build preview panel ───────────────────────────────────────────────
    const previewPanel = document.createElement('div');
    previewPanel.className = 'demo-preview';

    const demoBox = document.createElement('div');
    demoBox.className = 'demo-box';

    const content = document.createElement('div');
    content.className = 'demo-content';
    content.innerHTML = rawHTML;

    demoBox.appendChild(content);
    previewPanel.appendChild(demoBox);

    // ── Assemble ──────────────────────────────────────────────────────────
    demo.innerHTML = '';
    demo.appendChild(tabbar);
    demo.appendChild(previewPanel);
    demo.appendChild(pre);

    pre.classList.add('demo-code-block');
    pre.style.display = 'none'; // hidden by default (Preview tab active)

    // ── Tab switching ─────────────────────────────────────────────────────
    function showPreview() {
      previewBtn.classList.add('active');
      codeBtn.classList.remove('active');
      previewPanel.style.display = '';
      pre.style.display = 'none';
      resetBtn.style.display = 'none';
      copyBtn.style.display = '';
    }

    function showCode() {
      codeBtn.classList.add('active');
      previewBtn.classList.remove('active');
      previewPanel.style.display = 'none';
      pre.style.display = 'block';
      resetBtn.style.display = '';
      copyBtn.style.display = '';
    }

    previewBtn.addEventListener('click', showPreview);
    codeBtn.addEventListener('click', showCode);

    // ── Copy ──────────────────────────────────────────────────────────────
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent.trim()).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      });
    });

    // ── Reset ─────────────────────────────────────────────────────────────
    resetBtn.addEventListener('click', () => {
      code.innerHTML = highlighted;
      content.innerHTML = rawHTML;
    });

    // ── Live edit ─────────────────────────────────────────────────────────
    code.setAttribute('contenteditable', 'plaintext-only');
    code.setAttribute('spellcheck', 'false');
    code.addEventListener('input', () => {
      content.innerHTML = code.textContent;
    });
  });

  // ── Standalone <pre> blocks (not inside .es-demo) ────────────────────────
  // Just add a Copy button floating over the block.
  document.querySelectorAll('pre:not(.demo-code-block)').forEach(pre => {
    const code = pre.querySelector('code');
    if (!code) return;

    const btn = document.createElement('button');
    btn.className = 'ghost small pre-copy';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent.trim()).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 2000);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(btn);
  });

  // ── Sidebar nav highlight ─────────────────────────────────────────────────
  highlightNav();
  window.addEventListener('hashchange', highlightNav);

  // Highlight sidebar link as sections scroll into view.
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
