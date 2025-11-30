---
title: Dummy Button
order: 2
---

# {{ $frontmatter.title }}

This is a decorative button. You can only set the display item of the button through [Item Modifiers](/modifier/overview).

## Format

```yaml
button-name:
  type: dummy
  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...
```

## Example

```yaml
dummy-button:
  type: dummy
  id: STONE
  name: "&eThis is a dummy button"
```