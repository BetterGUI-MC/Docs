+++
title = "Click Type"
weight = 3
+++

* You may notice, in the example menu, there are some weird values in `command` (`action`) and `click-requirement`.
* What are those `left`, `right`, `middle` and `default`?
* Those are called Click Type. It indicates the different behaviors of the button on different click types (left-click, right-click, middle-click, etc).
* [List of Click Type](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.html)
* Along with the click types, you can set a `default` click type, whose behaviors will be set on all available click types.

## In `action`

```yaml
COMMAND:
  LEFT: 'tell: &cYou left-clicked'
  RIGHT: 'tell: &cYou right-clicked'
  MIDDLE: 'tell: &cYou middle-clicked'
  # Default for every click types
  DEFAULT:
    - "tell: &cUnknown click type"
    - "tell: Left, Right, Middle only"
```

## In `click-requirement`

```yaml
click-requirement:
  left:
    test:
      cooldown: 10
  right:
    test:
      cooldown: 20
  middle:
    test:
      cooldown: 30
  default:
    test:
      cooldown: 40
    fail-command:
      - "tell: &cCalm down"
```

## `NUMBER_KEY` with number key

* **The format**: `NUMBER_KEY_<0-8>`
* You can set the `NUMBER_KEY` click type with a number key (from `0` to `8`, specify the `1` to `9` number key)
* This requires [`use-modern-click-type`]({{% ref "basic/config" %}}) to be enabled
