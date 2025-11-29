---
title: Trade Mart
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/TradeMart/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/TradeMart/)

## Description

This is an addon to add Villager-like GUI for item trading.

## Format

```yaml
menu-settings:
  menu-type: trade

  # The actions when the player opens the menu
  open-action:
  - action
  - action
  - action
  ...

  # The actions when the player closes the menu
  close-action:
  - action
  - action
  - action
  ...

  # The requirement before the player can open the menu
  view-requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...

  # The requirement before the player can close the menu
  close-requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...

  # The permission required to open the menu
  permission: bettergui.test

  # The command to open the menu
  command:
  - command1
  - command2
  ...

  # The title of the inventory
  title: <name>
  #name: <name>

  # The list of argument processors to process the arguments of the command to open the menu
  argument-processor:
  - <argument-processor>
  - <argument-processor>

trade-name1:
  item1:
    <button-settings>
  item2:
    <button-settings>
  result:
    <button-settings>

trade-name2:
  item1:
    <button-settings>
  item2:
    <button-settings>
  result:
    <button-settings>
...
```

## Note

* `open-action`: the [Action](action/overview.md) when the menu is opened.
* `close-action`: the [Action](action/overview.md) when the menu is closed.
* `view-requirement`: the [Requirement](requirement/overview.md) to check before opening the menu. If it is not met, the menu will not be opened.
* `close-requirement`: the [Requirement](requirement/overview.md) to check before closing the menu. If it is not met, the menu will not be closed.
* `argument-processor`: the [Argument Processor](argument.md) to handle the arguments of the command to open the menu.

## Trade

```yaml
trade-name:
  item1:
    <button-settings>
  item2:
    <button-settings>
  result:
    <button-settings>
  max-uses: <number>
```

* `item1`: The first item to trade. REQUIRED
* `item2`: The second item to trade. OPTIONAL
* `result`: The result item. REQUIRED
* `max-uses`: The maximum uses of a trade. OPTIONAL

## Example

```yaml
menu-settings:
  menu-type: trade
  title: "&c&lTest Trade"
  command: trade

trade1:
  item:
    id: diamond
  item2:
    id: redstone
  result:
    id: piston

trade2:
  item:
    id: diamond_block
    amount: 64
  result:
    id: paper
    name: "&b&lRich Cerificate"

trade3:
  item:
    id: paper
    name: "&b&lRich Cerificate"
  item2:
    id: emerald
    amount: 64
  result:
    id: paper
    name: "&a&lVillage Cerificate"
    lore:
    - ""
    - "&7Signed by {player}"
```