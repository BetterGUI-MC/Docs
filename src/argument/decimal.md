---
title: Decimal Argument
---

# {{ $frontmatter.title }}

This is a processor to handle the decimal argument

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: decimal
      action:
      - action
      - action
      - action
      - action
      invalid-action:
      - action
      - action
      - action
      suggest:
      - 0
      - 1
      - 2
```

## Note

* `suggest`: the list of suggestions when the player uses tab-completion
* `action`: the [Action](/action/overview) to be called when the argument length is not enough
* `invalid-action`: the [Action](/action/overview) to be called when the argument is invalid

## Example

```yaml
menu-settings:
  command: teleportcoords
  argument-processor:
    x:
      type: decimal
      action: "tell: &cX is required"
    y:
      type: decimal
      action: "tell: &cY is required"
    z:
      type: decimal
      action: "tell: &cZ is required"

button:
  slot: 0
  id: ender_pearl
  name: "&bTeleport"
  command: "console: tp {player} {arg_x} {arg_y} {arg_z}"
```