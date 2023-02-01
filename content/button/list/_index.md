+++
title = "List Button"
weight = 9
+++

This is a conditional button which loops through the child buttons and check if a button can be displayed.

## Format

```yaml
button-name:
  type: list
  keep-current-index: <true/false>
  child:
    button1:
      <button-settings>
    button2:
      <button-settings>
    button3:
      <button-settings>
    ...
```

## Note

* `child`: the list of [Button]({{% relref "../overview" %}}). This button will loop through and display a button if it can be shown.
* `keep-current-index`: whether to only check when the player opens the menu.

## Example

```yaml
list-icon:
  type: list
  keep-current-index: false
  child:
    level_5:
      type: predicate
      button:
        id: grass
        name: "&aYou are in Level 5"
      view-requirement:
        level:
          level: 5
    level_3:
      type: predicate
      button:
        id: netherrack
        name: "&cYou are in Level 3"
      view-requirement:
        level:
          level: 3
    low_level:
      id: bedrock
      name: "&cYou are low level"
```
