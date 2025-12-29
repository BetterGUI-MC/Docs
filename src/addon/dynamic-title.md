---
title: Dynamic Title
---

# Dynamic Title [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/DynamicTitle/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/DynamicTitle/)

## Description

This is an addon for your existing menus. This enables updating inventory titles.

## How to use

Set the `creator` option of the `menu-settings` to be `dynamic-title`

```yaml
menu-settings:
  name: '&u&lExample Menu'

  creator: "dynamic-title"
  # ...
```

## More settings

```yaml
menu-settings:
  name: '&u&lExample Menu'

  # The creator to enable Dynamic Title
  creator: "dynamic-title"

  # How often the title should update in ticks (20 ticks = 1 second)
  title-period: 5

  # The title template
  # The list of title "frames" that will be displayed in order (when the title refreshes)
  title-template:
  - "&u-"
  - "&u--"
  - "&u---"
  - "&u----"
  - "&u-----"
  - "%original%"
  - "&u-----"
  - "&u----"
  - "&u---"
  - "&u--"
  - "&u-"
  - ""
```

::: warning
Sometimes when you close the menu, the menu will not be closed. It's a known (and wont-fix) bug because of how the packet is sent. You may have to set the `title-period` higher to reduce the chance the bug occurs.
:::