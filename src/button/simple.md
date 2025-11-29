---
title: Simple Button
---

# {{ $frontmatter.title }}

This is a combination of [Dummy Button](../dummy.md) and [Air Button](../air.md), so you can set both [Item Modifiers](modifier/overview.md) and [`action` (`command`) & `close-on-click`]((../air.md)#note).

## Format

```yaml
button-name:
  type: simple # You don't need to set this value. It's the default value
  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...
  # command:
  action:
  - <action>
  - <action>
  - <action>
  ...
  close-on-click: <true/false>
```

## Example

```yaml
simple-button:
  id: cobblestone
  name: "&bThis is a simple button"
  lore:
  - ""
  - "&fThis is a lore"
  action: "tell: &eYou clicked"
  close-on-click: true
```