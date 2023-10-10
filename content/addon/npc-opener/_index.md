+++
title = "NPC Opener"
weight = 1
+++

{{% notice warning %}}
**DEPRECATED**

This addon is deprecated & planned to be removed. Please use [Citizens' NPC Commands](https://wiki.citizensnpcs.co/NPC_Commands) instead.

To convert the settings, use the command `/convertnpcmenu`
{{% /notice %}}

## Command
| Command | Permission | Description |
| --- | --- | --- |
| `setnpcmenu  <menu> [isLeftClick] [isRightClick] [args]` | `bettergui.setnpcmenu` | Set the NPC the user selecting to be the trigger to open the `<menu>` with the arguments `[args]`. You can enable `[isLeftClick]` & `[isRightClick]` (`true/false`) to specify if the menu can be opened by left-clicking and/or right-clicking the NPC |
| `removenpcmenu` | `bettergui.removenpcmenu` | Remove the *open-menu* trigger of the NPC the user selecting |
| `convertnpcmenu` | `bettergui.convertnpcmenu` | Convert the settings to Citizens |
