---
title: Store Argument
---

# {{ $frontmatter.title }}

This is a processor to store the arguments and provide them as [Variables](/misc/variable)

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
    <name>:
      type: store # Not needed as it's the default type
      action:
      - action
      - action
      - action
      - action
      invalid-action:
      - action
      - action
      - action
      length: <number>
      take-remaining: <true/false>
      suggest:
      - string1
      - string2
      - string3
      check-suggest: <true/false>
```

## Note

* `length`: the required length of the argument
* `take-remaining`: whether to take all remaining arguments
* `suggest`: the list of suggestions when the player uses tab-completion
* `check-suggest`: whether to check the argument against the `suggest` list
* `action`: the [Action](/action) to be called when the argument length is not enough
* `invalid-action`: the [Action](/action) to be called when the argument is invalid

## Example

```yaml
menu-settings:
  command: testargs
  argument-processor:
    hello:
      length: 2
      suggest:
      - Hello you
      - Welcome back
      action: "tell: &cHello is required"
    message:
      take-remaining: true
      suggest:
      - HSGamer
      - Minecraft World
      action: "tell: &cMessage is required"

button:
  slot: 0
  id: stone
  name: "&bTest Arguments"
  lore:
  - "{arg_hello}, {arg_message}"
```