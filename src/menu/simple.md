---
title: Simple Menu
order: 1
---

# Simple Menu

This is the default menu type of BetterGUI, represents a chest-like GUI.

## Format

```yaml
menu-settings:
  menu-type: simple # You don't need to set this type. It's the default value

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

  # The type of the display inventory
  # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html
  inventory-type: <inventory-type>
  #inventory: <inventory-type>

  # The rows <1-6> of the inventory if the type is CHEST
  rows: <1-6>

  # How frequently the menu will refresh itself
  auto-refresh: <ticks>
  #ticks: <ticks>

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

  # Save the display to the cache for later use
  # This option is mainly used to fix a "self-open" issue when the player open the same menu
  cached: <true/false>

  # The creator to create the inventory. Mainly used to create custom inventories provided by addons.
  creator: default

  # The list of argument processors to process the arguments of the command to open the menu
  argument-processor:
  - <argument-processor>
  - <argument-processor>
 
  # The delay in milliseconds that a player can click the buttons of the menu
  click-delay: <millis>

# This is a special button. It will fill all empty slots of the inventory (You don't need to set this button)
default-button:
  <button-settings>

button1:
  <button-settings>
button2:
  <button-settings>
...
```

## Note

* `open-action`: the [Action](/action) when the menu is opened.
* `close-action`: the [Action](/action) when the menu is closed.
* `view-requirement`: the [Requirement](/requirement) to check before opening the menu. If it is not met, the menu will not be opened.
* `close-requirement`: the [Requirement](/requirement) to check before closing the menu. If it is not met, the menu will not be closed.
* `argument-processor`: the [Argument Processor](/argument) to handle the arguments of the command to open the menu.

## Example

```yaml
menu-settings:
  name: '&c&lExample Menu'
  rows: 6
  command: menu
  auto-refresh: 5
  open-action:
    - "tell: &eYou opened the example menu"
  close-action:
    - "tell: &cYou closed the example menu"

default-icon:
  type: animated
  child:
    frame1:
      id:
        - RED_STAINED_GLASS_PANE
        - STAINED_GLASS_PANE:14
    frame2:
      id:
        - GREEN_STAINED_GLASS_PANE
        - STAINED_GLASS_PANE:13
    frame3:
      id:
        - BLUE_STAINED_GLASS_PANE
        - STAINED_GLASS_PANE:11

# Buttons
spawn-cmd:
  COMMAND: 'spawn'
  NAME: '&u/spawn'
  LORE:
    - 'It just executes /spawn'
    - 'as the player who clicked.'
  ID: ender_pearl
  POSITION-X: 1
  POSITION-Y: 2

durability-armor:
  NAME: '&aDamaged armor'
  LORE:
    - 'This armor is damaged.'
  ID: diamond helmet
  DAMAGE: 100
  POSITION-X: 2
  POSITION-Y: 2
```