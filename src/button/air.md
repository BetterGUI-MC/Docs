---
title: Air Button
---

# {{ $frontmatter.title }}

This button represents the Air item, which the player can't see.

## Format

```yaml
button-name:
  type: air
  # command:
  action:
  - <action>
  - <action>
  - <action>
  ...
  close-on-click: <true/false>
```

## Note

* `action` (`command`): the [Action](action/overview.md) to be executed on clicked.
  * You can use [Click Type](misc/click.md) to set different [Actions](action/overview.md) for each type of click
* `close-on-click`: whether to close the menu on clicked.

## Example

```yaml
air-button:
  type: air
  command:
  - "tell: &aOh..."
  - "delay: 30"
  - "tell: &aUhhhh... Hello"
  close-on-click: true
```