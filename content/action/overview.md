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
  - 'tell: &eHello There'
  - 'delay: 60'
  - 'tell: &eHello Again'
  NAME: '&u&lHello Button'
  ID: stone
  POSITION-X: 1
  POSITION-Y: 1
```

## Built-ins
* [Back Menu](./action/back-menu.md)
* [Close Menu](./action/close-menu.md)
* [Open Menu](./action/open-menu.md)
* [Update Menu](./action/update-menu.md)
* [Console Executor](./action/console-executor.md)
* [Player Executor](./action/player-executor.md)
* [OP Executor](./action/op-executor.md)
* [Permission Executor](./action/permission-executor.md)
* [Broadcast Message](./action/broadcast-message.md)
* [Tell Message](./action/tell-message.md)
* [Play Sound](./action/play-sound.md)
* [Delay](./action/delay.md)
