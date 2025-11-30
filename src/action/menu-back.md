---
title: Back Menu
order: 7
---

# {{ $frontmatter.title }}

This action will send the player to his previous menu, or close the current menu if there is no previous menu.

## Format

* `back-menu`
* `backmenu`

::: info
You can bypass open requirements of the menu by adding `bypassChecks` to the action.
For example: `backmenu(bypassChecks)`
:::