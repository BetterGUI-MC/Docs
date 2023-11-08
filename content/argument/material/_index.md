+++
title = "Material Argument"
weight = 6
+++

This is a processor to handle the argument of Material

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: material
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
  command: materialview
  argument-processor:
    material:
      type: material
      action: "tell: &cMaterial is required"

button:
  slot: 0
  id: "{arg_material}"
  name: "&bMaterial"
```
