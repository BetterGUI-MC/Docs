+++
title = "Overview"
weight = 1
+++

* Menus are what BetterGUI is for. It's the thing displayed to the player.
* There are many built-in types of Menu (Check the sidebar). A developer can also make his own menu and register to the plugin.
* Generally, a menu contains 2 sections: `menu-settings` and [**Button**]({{% ref "../button/overview" %}})
* You can set the type of menu by setting the `menu-type` value in the `menu-settings` section

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
```
