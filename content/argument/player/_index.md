+++
title = "Player Argument"
weight = 3
+++

This is a processor to handle the argument for Player Name

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: player
      action:
      - action
      - action
      - action
      - action
      invalid-action:
      - action
      - action
      - action
      online-only: <true/false>
```

## Note

* `online-only`: whether to check if the player is online. If `true`, then only the online players are given to the suggestion list
* `action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument length is not enough
* `invalid-action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument is invalid

## Example

```yaml
menu-settings:
  command: confirmteleport
  argument-processor:
    player:
      type: player
      action: "tell: &cPlayer is required"
    target:
      type: player
      action: "tell: &cTarget is required"

button:
  slot: 0
  id: ender_pearl
  name: "&bTeleport"
  command: "console: tp {arg_player} {arg_target}"
```
