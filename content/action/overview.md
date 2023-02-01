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
* [Back Menu]({{% relref "menu-back" %}})
* [Close Menu]({{% relref "menu-close" %}})
* [Open Menu]({{% relref "menu-open" %}})
* [Update Menu]({{% relref "menu-update" %}})
* [Console Executor]({{% relref "console" %}})
* [Player Executor]({{% relref "player" %}})
* [OP Executor]({{% relref "op" %}})
* [Permission Executor]({{% relref "permission" %}})
* [Broadcast Message]({{% relref "broadcast" %}})
* [Tell Message]({{% relref "tell" %}})
* [Play Sound]({{% relref "sound" %}})
* [Delay]({{% relref "delay" %}})
