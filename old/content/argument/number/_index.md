+++
title = "Number Argument"
weight = 4
+++

This is a processor to handle the numeric argument

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: number
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
* `action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument length is not enough
* `invalid-action`: the [Action]({{% ref "action/overview" %}}) to be called when the argument is invalid

## Example

```yaml
menu-settings:
  command: giveapple
  argument-processor:
    amount:
      type: number
      action: "tell: &cAmount is required"

button:
  slot: 0
  id: apple
  name: "&bGive apple"
  command: "console: give {player} apple {arg_amount}"
```
