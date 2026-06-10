import './base.js';
import './tabs.js';
import './dropdown.js';
import './tooltip.js';
import './sidebar.js';
import { toast, toastEl, toastClear } from './toast.js';

// Register the global window.es.* APIs.
const es = window.es || (window.es = {});
es.toast = toast;
es.toast.el = toastEl;
es.toast.clear = toastClear;
