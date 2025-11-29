+++
title = "Air Button"
weight = 4
+++

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

* `action` (`command`): the [Action]({{% ref "action/overview" %}}) to be executed on clicked.
  * You can use [Click Type]({{% ref "misc/click" %}}) to set different [Actions]({{% ref "action/overview" %}}) for each type of click
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
