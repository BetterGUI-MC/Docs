+++
title = "Null Button"
weight = 5
+++

This is similar to [Air Button]({{% relref "../air" %}}), but this button represents nothing.

## Format

```yaml
button-name:
  type: null
  # command:
  action:
  - <action>
  - <action>
  - <action>
  ...
  close-on-click: <true/false>
```

## Note

* The difference is that, while [Air Button]({{% relref "../air" %}}) overrides the display item and the actions of a slot, this button only overrides the actions of a slot.

## Example

```yaml
null-button:
  type: null
  command:
  - "tell: &aOh..."
  - "delay: 30"
  - "tell: &aUhhhh... Hello"
  close-on-click: true
```
