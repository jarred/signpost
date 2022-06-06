# Signpost

Improve the scannability of your CSS classes.

---

[Tailwind](https://tailwindcss.com) is great, but when you build stateful, interactive, dynamic things, eventually there can be too many classes to keep track of.

At this point I split out all the CSS into a relevant file, and use this plugin and these conventions to add some structure and signposting to help with scannability.

This plugin escapes the special characters `_ , - , *` used in CSS classes in the conventions below.

## Conventions

Use an underscore `_` at the start of a class to identify a component or module. e.g. `._btn`

Use a hyphen `-` to indicate and target a child group e.g. `.-bg`

Use an asterix `*` to indicate a state or variant. e.g. `.\_btn.\*lg`

### Example html

```html
<div class="_module *audio w-full">
  <div class="-info">
    <h2>Content</h2>
  </div>
</div>
```

### Example CSS

```css
._module {
  @apply bg-blue-600 text-white flex flex-col gap-y-3 ...;
}
._module.*audio {
  @apply bg-red-400;
}
._module > .-info {
  @apply flex-grow;
}
```
