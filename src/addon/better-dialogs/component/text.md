---
title: Text
---

# Text

This is a component to display text content.

## Format

```yaml
text-component-name:
  # The type of the component.
  type: text
  # The text to display.
  text: "Hello, world!"
  # The width of the component in pixels.
  # Optional and defaults to 150.
  width: 150
```

## Example

```yaml
menu-settings:
  menu-type: notice-dialog
  title: "Example Dialog"
  command: exampledialog

show-name:
  type: text
  text: "&e&lHello, &b{player}&r!"

show-info:
  type: text
  text: "&e&lWelcome to our server!"
```

![Example](input/text/example.png)