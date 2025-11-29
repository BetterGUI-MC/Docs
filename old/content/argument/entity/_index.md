+++
title = "Entity Argument"
weight = 7
+++

This is a processor to handle the argument of Entity

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: entity
      action:
      - action
      - action
      - action
      - action
      invalid-action:
      - action
      - action
      - action
```

## Note

* `action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument length is not enough
* `invalid-action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument is invalid

## Example

```yaml
menu-settings:
  command: spawnentity
  argument-processor:
    entity:
      type: entity
      action: "tell: &cEntity is required"

button:
  slot: 0
  id: "egg"
  name: "&bSpawn Entity"
  command: "op: spawn {arg_entity}"
```
