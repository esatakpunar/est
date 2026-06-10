+++
title = "Toast"
weight = 130
description = "Programmatic toast notifications via the es.toast() API"
+++

Call `es.toast()` from anywhere. Supports variants, placement, and custom duration.

```js
es.toast('File saved successfully.')

// With title and variant
es.toast('Changes saved.', 'Success', { variant: 'success' })
es.toast('Check your input.', 'Warning', { variant: 'warning' })
es.toast('Something went wrong.', 'Error', { variant: 'danger' })

// Placement: 'top-right' (default), 'top-left', 'top-center',
//            'bottom-right', 'bottom-left', 'bottom-center'
es.toast('Bottom toast.', null, { placement: 'bottom-center' })

// Duration in ms (0 = persist until dismissed)
es.toast('Persists until closed.', null, { duration: 0 })

// Clear all toasts
es.toast.clear()
```
