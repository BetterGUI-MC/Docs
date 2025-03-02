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

## Targeted Variables

You can fetch the [Variable]({{% ref "misc/variable" %}}) for the target player argument by using this format:
```
{arg_<processor_name>_<variable_name>}
```
For PlaceholderAPI's placeholders, use this format:
```
{arg_<processor_name>_papi_<placeholder_without_brackets>}
```
For example (given that your argument processor name is `target`):
- `{level}` will be `{arg_target_level}`
- `{uuid}` will be `{arg_target_uuid}`
- `%player_gamemode%` will be `{arg_target_papi_player_gamemode}`

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
  name: "&bTeleport to {arg_target}"
  lore:
    - ""
    - "&7&lTarget Info"
    - "&7- &fName: &e{arg_target}"
    - "&7- &fUUID: &e{arg_target_uuid}"
    - "&7- &fLocation: &e{arg_target_world} {arg_target_x} {arg_target_y} {arg_target_z}"
    - "&7- &fTarget PlaceholderAPI: &e{arg_target_papi_player_gamemode}"
    - ""
  command: "console: tp {arg_player} {arg_target}"
```
