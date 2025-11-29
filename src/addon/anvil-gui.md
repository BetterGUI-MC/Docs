---
title: Anvil GUI
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/AnvilGUI/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/job/AnvilGUI/)

## Format
```yaml
# Settings
menu-settings:
  menu-type: anvil

  # The title of the menu
  title: <name>

  # The text to show when the player opens the menu
  text: <text>

  # The commands executed when the player clicks the result slot (the last slot)
  complete-action:
  - action
  - action
  ...

  # The commands executed when closing the menu
  close-action:
  - action
  - action
  ...

  # Whether the addon prevents the player from closing the menu
  prevent-close: <true/false>

  # The commands to open the menu
  command:
  - command1
  - command2
  ...

  # Whether the addon will clear the user's input when completed
  clear-input-on-complete: <true/false>

# Left Button
left-button:
  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...

# Right Button
right-button:
  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...

# Left Button (for simplier menu)
button:
  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...
```

## Description
* This is a special menu type only for getting inputs.
* In this menu type, the addon only apply ONE icon.

## Note
* The `complete-action` and `close-action` use the [Action](../Action.md) value.
* The `left-button`, `right-button` and `button` use the [Button](../Button.md) value.
* The menu will register a [Menu Variable](../Variable.md#menu-variables) named `{anvil_input}` to get the player's input.

## Example
```yaml
menu-settings:
  menu-type: anvil
  command: testanvil
  title: "&cTest Anvil"
  text: "What is your name?"
  clear-input-on-complete: true
  complete-action:
  - "tell: &aHello, {anvil_input}"
  prevent-close: true
  close-action:
  - "tell: &cYou closed the menu"

button:
  id: paper
```