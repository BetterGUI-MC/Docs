+++
title = "Overview"
weight = 1
+++

* Actions are used when you want to execute something on certain events (broadcast everyone when the player clicked the button, etc).
* There are many built-in types of actions. There will be listed in the sections below. A developer can also create his own action and register to this plugin.

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

## Built-ins
* [Back Menu]({{% ref "menu-back" %}})
* [Close Menu]({{% ref "menu-close" %}})
* [Open Menu]({{% ref "menu-open" %}})
* [Update Menu]({{% ref "menu-update" %}})
* [Console Executor]({{% ref "console" %}})
* [Player Executor]({{% ref "player" %}})
* [OP Executor]({{% ref "op" %}})
* [Permission Executor]({{% ref "permission" %}})
* [Broadcast Message]({{% ref "broadcast" %}})
* [Tell Message]({{% ref "tell" %}})
* [Play Sound]({{% ref "sound" %}})
* [Delay]({{% ref "delay" %}})
