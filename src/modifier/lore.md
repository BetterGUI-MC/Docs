---
title: Lore
---

# {{ $frontmatter.title }}

This modifier will set the lore of the item.

## Format

```yaml
lore: <lore>
```
```yaml
lore:
- <lore>
- <lore>
- <lore>
...
```

## Example

```yaml
stone-button:
  slot: 1
  id: stone
  name: "&cThis is a stone button"
  lore:
  - "This is just a stone button"
  - "&uNothing special"
```