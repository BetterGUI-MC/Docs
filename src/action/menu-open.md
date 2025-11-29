---
title: Open Menu
---

# {{ $frontmatter.title }}

This action will open the specific menu.

## Format

* `open-menu: <menu_name>`
* `open: <menu_name>`
* `menu: <menu_name>`

## Example

* `open-menu: example.yml`
* `open: pvp.yml`
* `menu: test.yml`

::: info
You can bypass open requirements of the menu by adding `bypassChecks` to the action.
For example: `open(bypassChecks): pvp.yml`
:::