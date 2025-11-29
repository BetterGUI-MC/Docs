---
title: Converter
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/Converter/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/Converter/)

::: info
This is a work-in-progress. More features will be added soon.
:::

::: warning
This addon does not guarantee to convert 100% of your menus, because the structure is usually different between menu plugins.

BetterGUI does not have conflict with other menus. Therefore, it's recommended to do a fresh start by making your next menu entirely in BetterGUI, then rework your old menus one-by-one in BetterGUI.
:::

## Supported plugins

* [ChestCommands](https://dev.bukkit.org/projects/chest-commands)
* [DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734/)

## How to use

0. **Don't delete your old plugin**
1. [Download & Install the addon](/basic/addon)
2. Start & Join your server
3. Type `/convertmenu <plugin> [menu]`
  * If you don't set the `[menu]`, the addon will convert all menus from your old menu plugin.
4. The converted files will be in `plugins/BetterGUI/addon/Converter/<plugin>`