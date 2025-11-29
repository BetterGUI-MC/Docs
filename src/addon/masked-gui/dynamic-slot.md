---
title: Dynamic Slot
---

# {{ $frontmatter.title }}

If you want to control the [Slot](/button/slot) interactively (i.e. use [variables](/misc/variable) in the slot, [add Math to the slot](/eval-extra)), you can use `dynamic-slot` instead of the traditional `slot`

## Example

```yaml
level-slot:
  dynamic-slot: "{level} % 9" # Slot depends on the level of the player
  id: red_stained_glass_pane
  name: "&cDynamic Button"
  lore:
    - "&fLevel: {level}"

# Button to give XP
give-xp:
  slot: 9-17
  id:
    - EXPERIENCE_BOTTLE
    - EXP_BOTTLE
  name: "&eGive &f10 XP"
  lore:
    - "&fLevel: {level}"
  click-requirement:
    old-version:
      version: 13 # Check if the server is at 1.13.X
      success-action: "console: xp add {player} 10 points"
      fail-action: "console: xp 10 {player}"
```

![Dynamic Slot Demo 1](dynamic-slot/dynamic-slot-demo1.gif)None