---
title: Action
---

# {{ $frontmatter.title }}

* Actions are used when you want to execute something on certain events (broadcast everyone when the player clicked the button, etc).
* There are many built-in types of actions (Check the sidebar). A developer can also create his own action and register to this plugin.

## Example
```yaml
hello:
  COMMAND: # Here are the actions
  - "tell: &eHello There"
  - "delay: 60"
  - "tell: &eHello Again"
  NAME: '&u&lHello Button'
  ID: stone
  POSITION-X: 1
  POSITION-Y: 1
```
